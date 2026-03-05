import { Link, useLocation } from "react-router";

export function Header() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Nos offres" },
    { path: "/a-propos", label: "Qui sommes-nous" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Bandeau bleu en haut */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#10b981] text-white py-3 px-6 text-center">
        <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>
          ⚡ PME & dirigeants : <span className="text-[#34d399]">Identifiez vos gains cachés</span> et transformez votre productivité
        </p>
      </div>

      {/* Header principal */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[#0F172A] hover:text-[#10b981] transition-colors" style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.03em' }}>
            noeia
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors relative ${
                  isActive(link.path)
                    ? "text-[#10b981]"
                    : "text-gray-600 hover:text-[#10b981]"
                }`}
                style={{ fontSize: '0.9375rem', fontWeight: isActive(link.path) ? '700' : '600' }}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute -bottom-5 left-0 right-0 h-0.5 bg-[#10b981]"></div>
                )}
              </Link>
            ))}
            <Link
              to="/diagnostic"
              className="bg-[#10b981] text-white px-5 py-2 rounded-lg hover:bg-[#059669] transition-all hover:scale-105 shadow-md"
              style={{ fontSize: '0.875rem', fontWeight: '700' }}
            >
              Diagnostic gratuit
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}