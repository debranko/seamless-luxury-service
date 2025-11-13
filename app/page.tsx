// New Dark Luxury Design
import HeroNew from '@/components/sections/HeroNew';
import SignatureAnimation from '@/components/sections/SignatureAnimation';
import ProblemSolution from '@/components/sections/ProblemSolution';
import ObedioExperience from '@/components/sections/ObedioExperience';
import PrivacyFirst from '@/components/sections/PrivacyFirst';
import LuxuryMaterials from '@/components/sections/LuxuryMaterials';
import ForIntegrators from '@/components/sections/ForIntegrators';
import ForCrew from '@/components/sections/ForCrew';
import SecuritySection from '@/components/sections/SecuritySection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-black">
      <HeroNew />
      <SignatureAnimation />
      <ProblemSolution />
      <ObedioExperience />
      <PrivacyFirst />
      <LuxuryMaterials />
      <ForIntegrators />
      <ForCrew />
      <SecuritySection />
      <FinalCTA />
    </main>
  );
}
