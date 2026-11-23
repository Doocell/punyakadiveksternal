import { BenefitsSection } from './components/BenefitsSection';
import { ConservationSection } from './components/ConservationSection';
import { FactorsSection } from './components/FactorsSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { LevelsSection } from './components/LevelsSection';
import { QuizSection } from './components/QuizSection';
import { RegionsSection } from './components/RegionsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { SpeciesSection } from './components/SpeciesSection';

export function App() {
  return (
    <>
      <a className="skip-link" href="#konten-utama">
        Lewati ke konten utama
      </a>
      <Header />
      <main id="konten-utama" tabIndex={-1}>
        <HeroSection />
        <IntroSection />
        <LevelsSection />
        <RegionsSection />
        <SpeciesSection />
        <FactorsSection />
        <BenefitsSection />
        <GallerySection />
        <ConservationSection />
        <ResourcesSection />
        <QuizSection />
      </main>
      <Footer />
    </>
  );
}
