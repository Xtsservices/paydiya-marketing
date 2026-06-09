import { Hero } from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { Solutions } from '../components/Solutions';
import { Products } from '../components/Products';
import { WhyPaydiya } from '../components/WhyPaydiya';
import { Industries } from '../components/Industries';
import { Partners } from '../components/Partners';
import { ImpactStats } from '../components/ImpactStats';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Solutions />
      <Products />
      <WhyPaydiya />
      <Industries />
      <Partners />
      <ImpactStats />
      <CTASection />
    </>
  );
}
