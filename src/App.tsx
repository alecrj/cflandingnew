import { StickyCTA, ExitPopup } from './components';
import {
  Hero,
  LiveDemo,
  Problem,
  Solution,
  HowItWorks,
  Features,
  Pricing,
  ROICalculator,
  Technology,
  FAQ,
  RiskReversal,
  FinalCTA,
  Footer
} from './sections';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        <Hero />
        <LiveDemo />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Pricing />
        <ROICalculator />
        <Technology />
        <FAQ />
        <RiskReversal />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Components */}
      <StickyCTA />
      <ExitPopup />
    </div>
  );
}

export default App;
