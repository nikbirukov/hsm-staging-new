import { Nav } from './components/sections/Nav.jsx';
import { PricingHero } from './components/sections/PricingHero.jsx';
import { PricingCard } from './components/sections/PricingCard.jsx';
import { TrustBar } from './components/sections/TrustBar.jsx';
import { FinalCTA } from './components/sections/FinalCTA.jsx';
import { Footer } from './components/sections/Footer.jsx';

function PricingApp() {
  return (
    <>
      <Nav />
      <main>
        <PricingHero />
        <PricingCard />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default PricingApp;
