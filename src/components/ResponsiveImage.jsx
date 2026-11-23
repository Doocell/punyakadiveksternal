import { useEffect, useRef, useState } from 'react';

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = '',
  eager = false,
  fetchPriority,
}) {
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const imgRef = useRef(null);

  const resolvedSrc =
    attempt === 0 ? src : `${src}${src.includes('?') ? '&' : '?'}retry=${attempt}`;

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) {
      setFailed(true);
    }
  }, [resolvedSrc]);

  const handleRetry = () => {
    setFailed(false);
    setAttempt((n) => n + 1);
  };

  if (failed) {
    return (
      <div className="media-fallback" role="img" aria-label={alt || 'Gambar tidak tersedia'}>
        <span>Gambar &ldquo;{alt || 'alam Indonesia'}&rdquo; gagal dimuat.</span>
        <button type="button" className="media-retry" onClick={handleRetry}>
          Muat ulang gambar
        </button>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? undefined : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      fetchPriority={fetchPriority}
      onError={() => setFailed(true)}
      className={`media-img ${className}`.trim()}
    />
  );
}
