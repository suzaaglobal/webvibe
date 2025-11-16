import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-suzaa-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-lg font-bold text-suzaa-navy">
              SUZAA
            </Link>
            <div className="hidden md:flex gap-8">
              <a
                href="#how-it-works"
                className="text-sm text-suzaa-neutral-600 hover:text-suzaa-navy transition-colors"
              >
                How it works
              </a>
              <a
                href="#pricing"
                className="text-sm text-suzaa-neutral-600 hover:text-suzaa-navy transition-colors"
              >
                Pricing
              </a>
              <a
                href="https://docs.suzaa.com/"
                className="text-sm text-suzaa-neutral-600 hover:text-suzaa-navy transition-colors"
              >
                Docs
              </a>
              <a
                href="#contact"
                className="text-sm text-suzaa-neutral-600 hover:text-suzaa-navy transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://app.suzaa.com/"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-suzaa-navy text-white rounded hover:bg-suzaa-neutral-900 transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
