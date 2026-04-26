import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

export default function LiveTraffic() {
  return (
    <section id="features" className="bg-[#f9fafb] py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            {/* TODO: Replace with photo of a Nigerian driver in Lagos traffic, dashboard view */}
            <img
              src="/images/placeholders/driver-single.webp"
              alt="Driver navigating Lagos with Qore Maps on the dashboard"
              className="w-full object-cover border border-gray-100"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Turn by turn</Eyebrow>
            <h2
              style={{ fontFamily: 'Ciscela, serif' }}
              className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
            >
              Get there faster. No surprises.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Third Mainland at 7am, Lekki-Epe after work, Apapa on a container
              day — we route around what's actually happening, with live
              traffic, road closures, and incident reports updated by drivers
              like you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
