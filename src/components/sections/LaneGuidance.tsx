import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

export default function LaneGuidance() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow>Lane guidance</Eyebrow>
            <h2
              style={{ fontFamily: 'Ciscela, serif' }}
              className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
            >
              No more wrong turns.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Clear visuals at every junction tell you which lane to be in and
              when, so you're never stuck guessing at the last second.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <img
              src="/images/laneguidance.png"
              alt="Lane guidance on a Lagos junction"
              className="w-full object-cover border border-gray-100"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
