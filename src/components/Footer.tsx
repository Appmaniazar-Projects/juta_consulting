import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2e3192] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col space-y-4 mb-6">
              <Link to="/" className="inline-block">
                <div className="bg-white p-1 rounded-lg inline-flex items-center justify-center">
                  <img 
                    src="/images/JutaLogo2.png" 
                    alt="JUTA Training and Skills Development" 
                    className="h-16 w-auto"
                  />
                </div>
              </Link>
              <p className="text-xl font-bold text-white">JUTA Training & Skills Development</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering individuals and organizations through comprehensive skill development 
              and professional training programs. We deliver excellence in education and consulting services.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#ffdd00] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  OFFICE 25, FIVE ON NEW ROAD,<br />
                  CARLSWALD, MIDRAND, 1685
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#ffdd00] flex-shrink-0" />
                <span className="text-gray-300">sindi@jutatraining.co.za</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffdd00]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#00a651] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#00a651] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#00a651] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#00a651] transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffdd00]">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#ffdd00] flex-shrink-0" />
                <span className="text-gray-300 text-sm">Monday – Friday: 8:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#ffdd00] flex-shrink-0" />
                <span className="text-gray-300 text-sm">Saturday: Closed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#ffdd00] flex-shrink-0" />
                <span className="text-gray-300 text-sm">Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Juta Training & Consulting. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Transforming Skills, Transforming Lives
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;