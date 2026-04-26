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
              Add the places we actually go.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Know a spot the map is missing — your barber, your church, the
              new suya place? Add it. Every place you share makes Qore Maps
              better for the next person.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            {/* TODO: Replace with photo of a Nigerian contributor adding a place — market scene or street pin UI */}
            <img
              src="/images/placeholders/report-road.webp"
              alt="Adding a new place to Qore Maps"
              className="w-full object-cover border border-gray-100"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
