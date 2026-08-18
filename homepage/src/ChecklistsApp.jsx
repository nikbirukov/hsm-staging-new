import { Nav } from './components/sections/Nav.jsx';
import { ChecklistsHero } from './components/sections/ChecklistsHero.jsx';
import { ChecklistCategories } from './components/sections/ChecklistCategories.jsx';
import { ChecklistFeatures } from './components/sections/ChecklistFeatures.jsx';
import { ReportSamples } from './components/sections/ReportSamples.jsx';
import { TrustBar } from './components/sections/TrustBar.jsx';
import { FinalCTA } from './components/sections/FinalCTA.jsx';
import { Footer } from './components/sections/Footer.jsx';

function ChecklistsApp() {
  return (
    <>
      <Nav />
      <main>
        <ChecklistsHero />
        <ChecklistCategories />
        <ChecklistFeatures />
        <ReportSamples />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default ChecklistsApp;
