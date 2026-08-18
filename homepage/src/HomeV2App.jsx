import { Nav } from './components/sections/Nav.jsx';
import { HeroV2 } from './components/sections/HeroV2.jsx';
import { TrustBar } from './components/sections/TrustBar.jsx';
import { Problem } from './components/sections/Problem.jsx';
import { AppTour } from './components/sections/AppTour.jsx';
import { Personas } from './components/sections/Personas.jsx';
import { Outcomes } from './components/sections/Outcomes.jsx';
import { Compliance } from './components/sections/Compliance.jsx';
import { Templates } from './components/sections/Templates.jsx';
import { NewFeature } from './components/sections/NewFeature.jsx';
import { Testimonial } from './components/sections/Testimonial.jsx';
import { PricingTeaser } from './components/sections/PricingTeaser.jsx';
import { AnnotatedShowcase } from './components/sections/AnnotatedShowcase.jsx';
import { GoLive } from './components/sections/GoLive.jsx';
import { Faqs } from './components/sections/Faqs.jsx';
import { FinalCTA } from './components/sections/FinalCTA.jsx';
import { Footer } from './components/sections/Footer.jsx';

function HomeV2App() {
  return (
    <>
      <Nav />
      <main>
        {/* Funnel order: hook -> credibility -> value -> relevance -> product proof
            -> credentials -> social proof -> offer -> friction -> objections -> close */}
        <HeroV2 />
        <TrustBar />
        <Problem />
        <Outcomes />
        <Personas />
        <AppTour />
        <AnnotatedShowcase />
        <Templates />
        <NewFeature />
        <Compliance />
        <Testimonial />
        <PricingTeaser />
        <GoLive />
        <Faqs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default HomeV2App;
