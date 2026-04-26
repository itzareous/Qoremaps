import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

export default function RoadConditions() {
  return (
    <section className="bg-[#f9fafb] py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            {/* TODO: Replace with Lagos pothole / flooding alert UI mockup */}
            <img
              src="/images/placeholders/road-conditions-ui.webp"
              alt="Qore Maps showing a road condition alert"
              className="w-full object-cover border border-gray-100"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={0.08}>
            <Eyebrow>Road conditions</Eyebrow>
            <h2
              style={{ fontFamily: 'Ciscela, serif' }}
              className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
            >
              Stay alert. Stay safe.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We flag potholes, road closures, accidents, and flooding before
              you hit them. Other drivers report what they see; you get the
              warning before the bend.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
