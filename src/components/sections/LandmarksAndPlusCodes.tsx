import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import MapPoint from '@/assets/icons/Bold/MapPoint.svg?react';
import MapGrid from '@/assets/icons/Bold/MapGrid.svg?react';
import Bus from '@/assets/icons/Bold/Bus.svg?react';

const EASE = [0.23, 1, 0.32, 1] as const;

const features = [
  {
    Icon: MapPoint,
    title: 'Landmark addressing',
    body:
      "Search 'opposite the Mobil filling station, 200m past the roundabout' and we know where you mean.",
  },
  {
    Icon: MapGrid,
    title: 'Plus Codes',
    body:
      'For places without a street address, share a Plus Code and find it instantly.',
  },
  {
    Icon: Bus,
    title: 'BRT and danfo stops',
    body:
      'Plan how to actually get there. We map the BRT corridor and major danfo stops.',
  },
];

export default function LandmarksAndPlusCodes() {
  const reduce = useReducedMotion();

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: reduce
      ? { opacity: 1, transition: { duration: 0.2 } }
      : { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
  };

  return (
    <section className="bg-[#f9fafb] py-20">
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>Landmark search</Eyebrow>
          <h2
            style={{ fontFamily: 'Ciscela, serif' }}
            className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
          >
            Find landmarks, Plus Codes, and bus stops — all in one place.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Most Nigerian addresses aren't street numbers. Qore Maps speaks the
            language we actually use.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={item}
              className="qm-card-hover bg-white border border-gray-100 p-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-light text-primary mb-6">
                <Icon />
              </div>
              <h3
                style={{ fontFamily: 'Ciscela, serif' }}
                className="text-2xl text-gray-900 mb-3"
              >
                {title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
