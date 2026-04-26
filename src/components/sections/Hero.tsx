import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import PrimaryButton from '@/components/ui/PrimaryButton';
import SecondaryButton from '@/components/ui/SecondaryButton';

export default function Hero() {
  const goToWaitlist = () =>
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  const goToFeatures = () =>
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="bg-white pt-28 pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow>Discover Lagos</Eyebrow>
            <h1
              style={{ fontFamily: 'Ciscela, serif' }}
              className="text-5xl lg:text-7xl text-gray-900 leading-[1.05] mb-6"
            >
              Nigeria, mapped.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 mb-10 max-w-xl">
              We're a Nigerian team building a Nigerian map. Turn-by-turn
              navigation that knows Lagos traffic, landmark-based directions
              that match how we actually give them, and a discovery layer for
              the places we actually go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton onClick={goToWaitlist}>
                Join the waitlist
              </PrimaryButton>
              <SecondaryButton onClick={goToFeatures}>
                See how it works
              </SecondaryButton>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {/* TODO: Replace with phone mockup showing Qore Maps Lagos navigation UI */}
            <img
              src="/images/placeholders/hero-phone.webp"
              alt="Phone showing Qore Maps navigating a Lagos route"
              className="w-full max-w-md object-contain"
              style={{ aspectRatio: '3 / 4' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
