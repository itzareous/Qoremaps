import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

type Props = HTMLMotionProps<'div'> & {
  delay?: number;
  y?: number;
  duration?: number;
  as?: 'div' | 'section';
};

export default function Reveal({
  children,
  delay = 0,
  y = 12,
  duration = 0.5,
  className,
  ...rest
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: reduce ? 0.2 : duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
