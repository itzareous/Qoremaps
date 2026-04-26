import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const contributors = [
  {
    img: '/images/placeholders/contributor-1.webp',
    location: 'Yaba',
    todo: 'Replace with Nigerian contributor portrait — name TBD',
  },
  {
    img: '/images/placeholders/contributor-2.webp',
    location: 'Surulere',
    todo: 'Replace with Nigerian contributor portrait — name TBD',
  },
  {
    img: '/images/placeholders/contributor-3.webp',
    location: 'Lekki',
    todo: 'Replace with Nigerian contributor portrait — name TBD',
  },
];

export default function BuiltTogether() {
  return (
    <section className="bg-[#f9fafb] py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contributors.map((c) => (
            <div
              key={c.location}
              className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center"
            >
              {/* TODO: {c.todo} */}
              <img
                src={c.img}
                alt={`Contributor in ${c.location}`}
                className="w-24 h-24 rounded-full object-cover mb-6"
              />
              <h3
                style={{ fontFamily: 'Ciscela, serif' }}
                className="text-2xl text-gray-900 mb-1"
              >
                {/* TODO: replace placeholder name with real contributor */}
                A neighbour
              </h3>
              <p className="text-sm text-gray-500">
                Contributor in {c.location}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
