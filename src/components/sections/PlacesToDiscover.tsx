import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const pois = [
  { img: '/images/placeholders/poi-1.jpg',  name: 'Computer Village',          category: 'Ikeja' },
  { img: '/images/placeholders/poi-2.jpg',  name: 'Shoprite Lekki',            category: 'Shopping' },
  { img: '/images/placeholders/poi-3.webp', name: 'Chicken Republic',          category: 'Food' },
  { img: '/images/placeholders/poi-4.webp', name: 'NNPC Filling Station',      category: 'Fuel' },
  { img: '/images/placeholders/poi-5.webp', name: 'GTBank',                    category: 'Banking' },
  { img: '/images/placeholders/poi-6.webp', name: 'Lekki Conservation Centre', category: 'Outdoors' },
  { img: '/images/placeholders/poi-7.webp', name: 'Nike Art Gallery',          category: 'Culture' },
  { img: '/images/placeholders/poi-8.webp', name: 'New Afrika Shrine',         category: 'Nightlife' },
];

export default function PlacesToDiscover() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>Discover</Eyebrow>
          <h2
            style={{ fontFamily: 'Ciscela, serif' }}
            className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
          >
            Thousands of places to discover.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            From Computer Village to the Lekki coast, the places Lagos
            actually goes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pois.map((p) => (
            <div key={p.name} className="bg-white border border-gray-100">
              {/* TODO: Replace with photo of {p.name} in Lagos */}
              <img
                src={p.img}
                alt={p.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-5">
                <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2">
                  {p.category}
                </span>
                <h3
                  style={{ fontFamily: 'Ciscela, serif' }}
                  className="text-xl text-gray-900"
                >
                  {p.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
