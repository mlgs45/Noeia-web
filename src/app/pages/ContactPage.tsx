import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on pourrait gérer l'envoi du formulaire
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Nous vous recontacterons rapidement.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
            📞 Nous contacter
          </span>
          <h1 className="mb-6 text-[#0F172A]" style={{ fontSize: '3.5rem', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Discutons de votre projet
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Identifions ensemble vos leviers de productivité et calculons le ROI de votre transformation.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulaire */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#10b981] transition-all shadow-lg">
              <h2 className="mb-6 text-[#0F172A]" style={{ fontSize: '2rem', fontWeight: '700' }}>
                Demander un diagnostic
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700" style={{ fontSize: '0.9375rem', fontWeight: '600' }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2 text-gray-700" style={{ fontSize: '0.9375rem', fontWeight: '600' }}>
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700" style={{ fontSize: '0.9375rem', fontWeight: '600' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                    placeholder="jean.dupont@entreprise.fr"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700" style={{ fontSize: '0.9375rem', fontWeight: '600' }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700" style={{ fontSize: '0.9375rem', fontWeight: '600' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent resize-none transition-all"
                    placeholder="Décrivez brièvement vos enjeux et objectifs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#10b981] text-white px-8 py-4 rounded-lg hover:bg-[#059669] transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                  style={{ fontWeight: '700', fontSize: '1.0625rem' }}
                >
                  Envoyer ma demande
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div>
              <div className="mb-12">
                <h2 className="mb-6 text-[#0F172A]" style={{ fontSize: '2rem', fontWeight: '700' }}>
                  Autres moyens de nous contacter
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#10b981] transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-[#0F172A]" style={{ fontSize: '1.125rem', fontWeight: '700' }}>
                        Email
                      </h3>
                      <a href="mailto:contact@noeia.fr" className="text-gray-600 hover:text-[#10b981] transition-colors" style={{ fontSize: '1rem' }}>
                        contact@noeia.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#10b981] transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-[#0F172A]" style={{ fontSize: '1.125rem', fontWeight: '700' }}>
                        LinkedIn
                      </h3>
                      <a href="#" className="text-gray-600 hover:text-[#10b981] transition-colors" style={{ fontSize: '1rem' }}>
                        Suivez-nous sur LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white p-8 rounded-xl shadow-xl">
                <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  Premier contact
                </h3>
                <p className="mb-4 text-gray-200" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  Suite à votre demande, nous organiserons un premier échange de 30 minutes pour :
                </p>
                <ul className="space-y-3 text-gray-200" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#34d399] rounded-full mt-2"></span>
                    <span>Comprendre vos enjeux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#34d399] rounded-full mt-2"></span>
                    <span>Identifier les premiers leviers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#34d399] rounded-full mt-2"></span>
                    <span>Estimer le potentiel de gains</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              ❓ Questions fréquentes
            </span>
            <h2 className="text-[#0F172A]" style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#10b981]">
              <h3 className="mb-3 text-[#0F172A]" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                Combien coûte un diagnostic ?
              </h3>
              <p className="text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
                Le diagnostic initial est souvent proposé à tarif préférentiel ou inclus dans l'accompagnement. Contactez-nous pour un devis personnalisé.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#10b981]">
              <h3 className="mb-3 text-[#0F172A]" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                Quelle est la durée d'un accompagnement ?
              </h3>
              <p className="text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
                Cela dépend de vos besoins : de 2 semaines pour un diagnostic à plusieurs mois pour un accompagnement complet. Nous adaptons notre intervention à votre rythme.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#10b981]">
              <h3 className="mb-3 text-[#0F172A]" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                Travaillez-vous avec tous les secteurs ?
              </h3>
              <p className="text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
                Nous accompagnons principalement des PME dans l'industrie et les services B2B. Notre approche s'adapte à la plupart des secteurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}