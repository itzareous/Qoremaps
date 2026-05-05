import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

export default function BuiltTogether() {
  return (
    <section className="bg-[#f9fafb] py-20">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <Eyebrow>Built together</Eyebrow>
          <h2
            style={{ fontFamily: 'Ciscela, serif' }}
            className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
          >
            We're building it together.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Qore Maps gets better every time someone shares what they know — a
            new shop, a missing road, a closed bridge.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
