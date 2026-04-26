import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Hamburger from '@/assets/icons/Outline/Hamburger.svg?react';
import Close from '@/assets/icons/Outline/Close.svg?react';
import Container from '@/components/ui/Container';
import PrimaryButton from '@/components/ui/PrimaryButton';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Contribute', href: '#contribute' },
];

const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

export default function Nav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  const goToWaitlist = () => {
    setOpen(false);
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100">
      <Container className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          {/* TODO: Replace with /images/logo.svg once provided. Text wordmark in Ciscela for now. */}
          <span
            className="text-2xl text-gray-900"
            style={{ fontFamily: 'Ciscela, serif' }}
          >
            Qore Maps
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-gray-900"
              style={{ transition: 'color 180ms var(--ease-out)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryButton onClick={goToWaitlist} className="text-sm px-6 py-2.5">
            Join the waitlist
          </PrimaryButton>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="qm-press lg:hidden text-gray-900"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Hamburger />}
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="drawer"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.28, ease: EASE_DRAWER }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-gray-700"
                >
                  {l.label}
                </a>
              ))}
              <PrimaryButton onClick={goToWaitlist} className="w-full">
                Join the waitlist
              </PrimaryButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
