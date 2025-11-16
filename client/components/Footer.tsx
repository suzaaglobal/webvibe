import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-suzaa-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">SUZAA</h3>
            <p className="text-white/70 text-sm">
              Payments, Simplified.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  How it works&nbsp;
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://docs.suzaa.com/"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Contact us&nbsp;
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.suzaa.com/05-legal/02-privacy-and-data"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://docs.suzaa.com/05-legal/01-terms-of-use"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="https://docs.suzaa.com/05-legal/03-policies-and-notices"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            &copy; 2024 SUZAA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
