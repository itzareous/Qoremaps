import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

export default function CarPlay() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-primary-light text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 mb-6">
            Coming soon
          </span>
          <h2
            style={{ fontFamily: 'Ciscela, serif' }}
            className="text-4xl lg:text-5xl text-white leading-tight mb-6"
          >
            Coming to CarPlay and Android Auto.
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hands on the wheel, eyes on the road. Qore Maps is built for the
            way Nigerians actually drive.
          </p>
        </Reveal>
        <Reveal className="flex justify-center" delay={0.12} duration={0.7}>
          {/* TODO: Replace with CarPlay dashboard showing Lagos map data */}
          <img
            src="/images/placeholders/carplay.webp"
            alt="Qore Maps running on a CarPlay dashboard"
            className="w-full max-w-4xl object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
