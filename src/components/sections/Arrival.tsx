import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

export default function Arrival() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow>Arrival</Eyebrow>
            <h2
              style={{ fontFamily: 'Ciscela, serif' }}
              className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
            >
              You've arrived.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We don't just drop you on the street. We tell you which gate,
              which floor, which side of the building.
            </p>
          </div>
          <div>
            {/* TODO: Replace with arrival card UI showing a Lagos POI like a Lekki restaurant */}
            <img
              src="/images/placeholders/arrival.webp"
              alt="Arrival card showing a Lagos destination"
              className="w-full object-cover border border-gray-100"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
