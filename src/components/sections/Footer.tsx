import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <span
              className="text-3xl block mb-3"
              style={{ fontFamily: 'Ciscela, serif' }}
            >
              Qore Maps
            </span>
            <p className="text-gray-400">Nigeria, mapped.</p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">How it works</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white">Contribute</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-white">About</a></li>
              <li><a href="/privacy" className="text-gray-200 hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="text-gray-200 hover:text-white">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">
              Get in touch
            </h4>
            <a
              href="mailto:hello@qorelly.com"
              className="text-gray-200 hover:text-white"
            >
              hello@qorelly.com
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-800">
        <Container className="py-6 flex flex-col lg:flex-row gap-2 lg:gap-6 justify-between text-sm text-gray-500">
          <span>© 2026 Qore Technologies LTD. All rights reserved.</span>
          <span>
            Qore Maps is a product of Qore Technologies LTD, the makers of
            Qorelly.
          </span>
        </Container>
      </div>
    </footer>
  );
}
