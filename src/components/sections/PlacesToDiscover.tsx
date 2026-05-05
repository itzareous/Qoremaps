import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

const EASE = [0.23, 1, 0.32, 1] as const;

const pois = [
  { img: '/images/lagos-places/computer-village.webp',   name: 'Computer Village',          category: 'Ikeja' },
  { img: '/images/lagos-places/shoprite.webp',           name: 'Shoprite Lekki',            category: 'Shopping' },
  { img: '/images/lagos-places/chicken-republic.webp',   name: 'Chicken Republic',          category: 'Food' },
  { img: '/images/lagos-places/nnpc.webp',               name: 'NNPC Filling Station',      category: 'Fuel' },
  { img: '/images/lagos-places/gtbank.webp',             name: 'GTBank',                    category: 'Banking' },
  { img: '/images/lagos-places/conservation-centre.webp', name: 'Lekki Conservation Centre', category: 'Outdoors' },
  { img: '/images/lagos-places/nike-gallery.webp',       name: 'Nike Art Gallery',          category: 'Culture' },
  { img: '/images/lagos-places/afrika-shrine.webp',      name: 'New Afrika Shrine',         category: 'Nightlife' },
];

export default function PlacesToDiscover() {
  const reduce = useReducedMotion();

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    show: reduce
      ? { opacity: 1, transition: { duration: 0.2 } }
      : { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.04 } },
  };

  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
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
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pois.map((p) => (
            <motion.div
              key={p.name}
              variants={item}
              className="qm-card-hover bg-white border border-gray-100"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                decoding="async"
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
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
