import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

export default function Contribute() {
  return (
    <section id="contribute" className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow>Contribute</Eyebrow>
            <h2
              style={{ fontFamily: 'Ciscela, serif' }}
              className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
            >
              Help the next driver.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              See an accident, a sudden jam, a road closure, a pothole, or a
              checkpoint? One tap puts it on the map. Every Qore Maps driver
              heading your way sees it within seconds — and your report quietly
              fades when the road clears.
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              No accounts. No long forms. The fastest way to warn the people
              behind you is the icon under your thumb.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <img
              src="/images/contribute.jpg"
              alt="Adding a new place to Qore Maps"
              className="w-full object-cover border border-gray-100"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
