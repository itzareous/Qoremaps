import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

export default function CarPlay() {
  return (
    <section className="relative h-[65svh] min-h-[480px] lg:h-[100svh] lg:min-h-[640px] w-full overflow-hidden bg-gray-900 text-white">
      <img
        src="/images/comingsoon.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Scrim: heavier from the bottom on mobile, lighter on desktop where the
          text sits in a calmer band of the image. */}
      <div
        className="absolute inset-0 pointer-events-none
                   bg-gradient-to-t from-black/85 via-black/40 to-black/20
                   lg:from-black/75 lg:via-black/20 lg:to-transparent"
        aria-hidden="true"
      />

      <div className="relative h-full flex items-end pb-10 lg:pb-24">
        <Container className="w-full">
          <Reveal className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary-light text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 mb-6">
              Coming soon
            </span>
            <h2
              style={{ fontFamily: 'Ciscela, serif' }}
              className="text-4xl lg:text-6xl text-white leading-[1.05] mb-5"
            >
              Coming to CarPlay and Android Auto.
            </h2>
            <p className="text-lg leading-relaxed text-gray-200 max-w-xl">
              Hands on the wheel, eyes on the road. Qore Maps is built for the
              way Nigerians actually drive.
            </p>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
