import { Link } from "react-router";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo et description */}
          <div>
            <div className="mb-4" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
              noeia
            </div>
            <p className="text-gray-300" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
              Structurer, simplifier et automatiser ce qui fait perdre du temps aux PME industrielles et de services B2B.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4" style={{ fontSize: '1rem', fontWeight: '600' }}>
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors" style={{ fontSize: '0.9375rem' }}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors" style={{ fontSize: '0.9375rem' }}>
                  Nos offres
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors" style={{ fontSize: '0.9375rem' }}>
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors" style={{ fontSize: '0.9375rem' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4" style={{ fontSize: '1rem', fontWeight: '600' }}>
              Contact
            </h3>
            <div className="space-y-3">
              <a href="mailto:contact@noeia.fr" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" style={{ fontSize: '0.9375rem' }}>
                <Mail className="w-4 h-4" />
                contact@noeia.fr
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" style={{ fontSize: '0.9375rem' }}>
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400" style={{ fontSize: '0.875rem' }}>
          © 2026 Noeia. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}