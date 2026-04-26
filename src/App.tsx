import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import LiveTraffic from '@/components/sections/LiveTraffic';
import LaneGuidance from '@/components/sections/LaneGuidance';
import RoadConditions from '@/components/sections/RoadConditions';
import BuiltTogether from '@/components/sections/BuiltTogether';
import Contribute from '@/components/sections/Contribute';
import CarPlay from '@/components/sections/CarPlay';
import Arrival from '@/components/sections/Arrival';
import LandmarksAndPlusCodes from '@/components/sections/LandmarksAndPlusCodes';
import PlacesToDiscover from '@/components/sections/PlacesToDiscover';
import Waitlist from '@/components/sections/Waitlist';
import Footer from '@/components/sections/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveTraffic />
        <LaneGuidance />
        <RoadConditions />
        <BuiltTogether />
        <Contribute />
        <CarPlay />
        <Arrival />
        <LandmarksAndPlusCodes />
        <PlacesToDiscover />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
