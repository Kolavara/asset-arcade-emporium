
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 py-12 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-700">DigitalAssets</h2>
            <p className="text-sm text-gray-600">
              Your marketplace for high-quality digital assets, created by talented creators from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-brand-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-brand-600">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-sm text-gray-600 hover:text-brand-600">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/new" className="text-sm text-gray-600 hover:text-brand-600">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/templates" className="text-sm text-gray-600 hover:text-brand-600">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/category/graphics" className="text-sm text-gray-600 hover:text-brand-600">
                  Graphics
                </Link>
              </li>
              <li>
                <Link to="/category/code" className="text-sm text-gray-600 hover:text-brand-600">
                  Code
                </Link>
              </li>
              <li>
                <Link to="/category/audio" className="text-sm text-gray-600 hover:text-brand-600">
                  Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-brand-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-brand-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-brand-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-brand-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()} DigitalAssets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
