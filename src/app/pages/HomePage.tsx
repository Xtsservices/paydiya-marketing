import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { Solutions } from '../components/Solutions';
import { HowItWorks } from '../components/HowItWorks';
import { WhyPaydiya } from '../components/WhyPaydiya';
import { Industries } from '../components/Industries';
import { Dashboard } from '../components/Dashboard';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Solutions />
      <HowItWorks />
      <WhyPaydiya />
      <Industries />
      <Dashboard />
      <CTASection />
    </>
  );
}
