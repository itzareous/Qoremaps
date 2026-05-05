import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import PrimaryButton from '@/components/ui/PrimaryButton';
import SecondaryButton from '@/components/ui/SecondaryButton';

const EASE = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const goToWaitlist = () =>
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  const goToFeatures = () =>
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: reduce
      ? { opacity: 1, transition: { duration: 0.2 } }
      : { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.05 },
    },
  };

  return (
    <section className="bg-white pt-28 pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={item}>
              <Eyebrow>Discover Lagos</Eyebrow>
            </motion.div>
            <motion.h1
              variants={item}
              style={{ fontFamily: 'Ciscela, serif' }}
              className="text-5xl lg:text-7xl text-gray-900 leading-[1.05] mb-6"
            >
              Nigeria, mapped.
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg leading-relaxed text-gray-600 mb-10 max-w-xl"
            >
              We're a Nigerian team building a Nigerian map. Turn-by-turn
              navigation that knows Lagos traffic, landmark-based directions
              that match how we actually give them, and a discovery layer for
              the places we actually go.
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              <PrimaryButton onClick={goToWaitlist}>
                Join the waitlist
              </PrimaryButton>
              <SecondaryButton onClick={goToFeatures}>
                See how it works
              </SecondaryButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.7, ease: EASE, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/images/hero.png"
              alt="Qore Maps navigating a Lagos route"
              className="w-full max-w-md object-contain"
              style={{ aspectRatio: '3 / 4' }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
