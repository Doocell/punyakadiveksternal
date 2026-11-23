import { useRef, useState } from 'react';
import { QUIZ_META, QUIZ_QUESTIONS } from '../data/quizData';

function getResultMessage(score) {
  if (score >= 8) {
    return 'Hebat! Pemahamanmu sudah sangat baik.';
  }
  if (score >= 5) {
    return 'Bagus! Baca kembali bagian yang masih keliru, lalu coba lagi.';
  }
  return 'Tetap semangat! Pelajari kembali materi dan ulangi kuisnya.';
}

export function QuizSection() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const resultRef = useRef(null);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = QUIZ_QUESTIONS.length;

  const score = submitted
    ? QUIZ_QUESTIONS.reduce(
        (total, item) => (answers[item.id] === item.answer ? total + 1 : total),
        0
      )
    : 0;

  const handleSelect = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const getScrollBehavior = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({
        behavior: getScrollBehavior(),
        block: 'center',
      });
    });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    if (sectionRef.current) {
      window.scrollTo({
        top: Math.max(0, sectionRef.current.offsetTop - 70),
        behavior: getScrollBehavior(),
      });
    }
  };

  return (
    <section id={QUIZ_META.id} className="quiz-section" ref={sectionRef}>
      <div className="wrap quiz-wrap">
        <div className="section-head">
          <span className="kicker">{QUIZ_META.kicker}</span>
          <h2>{QUIZ_META.title}</h2>
          <p>{QUIZ_META.lead}</p>
        </div>

        <div className="quiz-progress" aria-live="polite">
          <span>
            {answeredCount === 0
              ? `Belum ada jawaban dipilih (0 dari ${totalQuestions} soal)`
              : `${answeredCount} dari ${totalQuestions} soal terjawab`}
          </span>
        </div>

        <form id="biodiversityQuiz" onSubmit={handleSubmit}>
          <div id="quizQuestions">
            {QUIZ_QUESTIONS.map((item, index) => {
              const selected = answers[item.id];
              const isAnswered = selected !== undefined;
              const isCorrect = submitted && isAnswered && selected === item.answer;
              const isWrong = submitted && (!isAnswered || selected !== item.answer);

              let statusClass = '';
              let statusLabel = '';
              let feedbackText = '';

              if (submitted) {
                if (isCorrect) {
                  statusClass = 'correct';
                  statusLabel = 'Benar';
                  feedbackText = `Tepat! ${item.explanation}`;
                } else if (isAnswered) {
                  statusClass = 'wrong';
                  statusLabel = 'Belum tepat';
                  feedbackText = `Belum tepat. ${item.explanation}`;
                } else {
                  statusClass = 'wrong';
                  statusLabel = 'Belum dijawab';
                  feedbackText = `Belum dijawab. ${item.explanation}`;
                }
              }

              return (
                <fieldset
                  className={`quiz-card${statusClass ? ` ${statusClass}` : ''}`}
                  id={`quiz-card-${index}`}
                  key={item.id}
                >
                  <legend className="quiz-legend">
                    <span>
                      {index + 1}. {item.question}
                    </span>
                    {submitted ? (
                      <span
                        className={`quiz-status ${
                          isCorrect ? 'quiz-status-correct' : 'quiz-status-wrong'
                        }`}
                      >
                        {statusLabel}
                      </span>
                    ) : null}
                  </legend>

                  <div className="quiz-options">
                    {item.options.map((option, optionIndex) => {
                      const isSelected = selected === optionIndex;
                      return (
                        <label
                          className={`quiz-option${isSelected ? ' selected' : ''}`}
                          key={option}
                        >
                          <input
                            type="radio"
                            name={item.id}
                            value={optionIndex}
                            checked={isSelected}
                            onChange={() => handleSelect(item.id, optionIndex)}
                          />
                          <span>
                            {String.fromCharCode(65 + optionIndex)}. {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {submitted ? (
                    <p
                      className="quiz-feedback"
                      id={`quiz-feedback-${index}`}
                      role={isWrong ? 'status' : undefined}
                    >
                      {feedbackText}
                    </p>
                  ) : null}
                </fieldset>
              );
            })}
          </div>

          <div className="quiz-actions">
            <button className="btn" type="submit">
              Periksa Jawaban
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              id="resetQuiz"
              onClick={handleReset}
            >
              Ulangi Kuis
            </button>
          </div>
        </form>

        <div
          className="quiz-result"
          id="quizResult"
          aria-live="polite"
          ref={resultRef}
          hidden={!submitted}
        >
          {submitted ? (
            <>
              <h3>
                Nilaimu: {score} dari {totalQuestions}
              </h3>
              <p>
                Kamu sudah menjawab {answeredCount} soal. {getResultMessage(score)}
              </p>
            </>
          ) : null}
        </div>

        <p className="quiz-note">{QUIZ_META.note}</p>
      </div>
    </section>
  );
}
