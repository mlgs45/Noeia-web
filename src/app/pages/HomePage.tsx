import { Link } from "react-router";
import { ArrowRight, Clock, TrendingUp, Target, AlertCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white relative overflow-hidden">
        {/* Effet de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#10b981] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#10b981] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte à gauche */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-[#10b981]/20 border border-[#10b981] rounded-full">
                <span className="text-[#34d399]" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                  ⚡ Gagnez 20 à 30% de productivité
                </span>
              </div>
              <h1 className="mb-6" style={{ fontSize: '4rem', lineHeight: '1', fontWeight: '700', letterSpacing: '-0.03em' }}>
                Arrêtez de perdre du temps.
                <span className="block mt-2 text-[#34d399]">Automatisez intelligent.</span>
              </h1>
              <p className="mb-8 text-gray-300 text-xl" style={{ lineHeight: '1.6' }}>
                Nous identifions vos irritants, clarifions vos processus et automatisons ce qui compte vraiment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/diagnostic"
                  className="inline-flex items-center gap-2 bg-[#10b981] text-white px-8 py-4 rounded-lg hover:bg-[#059669] transition-all hover:scale-105 shadow-xl"
                  style={{ fontWeight: '700', fontSize: '1.125rem' }}
                >
                  Diagnostic gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20"
                  style={{ fontWeight: '600', fontSize: '1.125rem' }}
                >
                  Voir nos offres
                </Link>
              </div>
            </div>

            {/* Image à droite */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#10b981]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758599543123-fa34a8358933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBkaXNjdXNzaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTY3MDQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professionnels en discussion"
                  className="w-full h-auto"
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[#0F172A]" style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1' }}>
                      30%
                    </div>
                    <div className="text-gray-600" style={{ fontSize: '0.75rem', fontWeight: '500' }}>
                      Gains moyens
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le problème */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1 bg-red-50 text-red-600 rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              ⚠️ Le vrai problème
            </span>
            <h2 className="mb-6 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              L'IA n'optimise pas le désordre.<br />
              <span className="text-[#10b981]">Elle l'accélère.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>
                <span style={{ fontWeight: '700' }}>Processus flous :</span> Personne ne sait qui fait quoi, comment, ni pourquoi.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <AlertCircle className="w-12 h-12 text-orange-500 mb-4" />
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>
                <span style={{ fontWeight: '700' }}>Irritants invisibles :</span> Tâches répétitives, oublis, ressaisies, attentes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
              <AlertCircle className="w-12 h-12 text-yellow-600 mb-4" />
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>
                <span style={{ fontWeight: '700' }}>15 à 30% de capacité perdue</span> dans des tâches à faible valeur.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0F172A] to-[#10b981] text-white p-8 rounded-2xl text-center shadow-xl">
            <p style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.4' }}>
              💡 Avant d'automatiser, il faut structurer.
            </p>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              ✓ La méthode Noeia
            </span>
            <h2 className="mb-4 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              4 étapes pour transformer vos opérations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Une approche pragmatique et mesurable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#10b981] transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-xl flex items-center justify-center" style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                  01
                </div>
                <h3 className="text-[#0F172A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  Scan des irritants
                </h3>
              </div>
              <p className="text-gray-600 text-lg" style={{ lineHeight: '1.6' }}>
                Identification des points de friction dans vos opérations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#10b981] transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-xl flex items-center justify-center" style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                  02
                </div>
                <h3 className="text-[#0F172A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  Cartographie des flux
                </h3>
              </div>
              <p className="text-gray-600 text-lg" style={{ lineHeight: '1.6' }}>
                Visualisation complète de vos processus métier.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#10b981] transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-xl flex items-center justify-center" style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                  03
                </div>
                <h3 className="text-[#0F172A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  Structuration
                </h3>
              </div>
              <p className="text-gray-600 text-lg" style={{ lineHeight: '1.6' }}>
                Clarification et optimisation des méthodes de travail.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#10b981] transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-xl flex items-center justify-center" style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                  04
                </div>
                <h3 className="text-[#0F172A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  Automatisation ciblée
                </h3>
              </div>
              <p className="text-gray-600 text-lg" style={{ lineHeight: '1.6' }}>
                Mise en place d'outils adaptés et mesure des résultats.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#0F172A] text-white p-10 rounded-2xl text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/20 rounded-full blur-3xl"></div>
            <p className="relative z-10" style={{ fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '600' }}>
              Nous ne vendons pas de l'IA.<br />
              <span style={{ fontWeight: '800' }} className="text-[#34d399]">Nous rendons votre entreprise prête à l'exploiter.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Les résultats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              📊 Résultats concrets
            </span>
            <h2 className="mb-4 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Des gains mesurables dès les premières semaines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="mb-3" style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>
                10-30%
              </div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.5', fontWeight: '500' }}>
                de temps récupéré sur les tâches répétitives
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="mb-3" style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>
                100%
              </div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.5', fontWeight: '500' }}>
                de visibilité sur vos opérations critiques
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="mb-3" style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>
                +20%
              </div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.5', fontWeight: '500' }}>
                de capacité sans recruter
              </p>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-xl">
            <p className="text-gray-900 text-center" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
              💰 Les gains identifiés financent souvent la transformation elle-même.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#10b981] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#34d399] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34d399] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="mb-6" style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            20% de capacité cachée ?<br />
            <span className="text-[#34d399]">Trouvons-la ensemble.</span>
          </h2>
          <p className="mb-10 text-gray-200 max-w-2xl mx-auto text-xl" style={{ lineHeight: '1.6' }}>
            Diagnostic gratuit • ROI calculé • Résultats mesurables
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#10b981] text-white px-10 py-5 rounded-xl hover:bg-[#059669] transition-all hover:scale-105 shadow-2xl"
            style={{ fontWeight: '700', fontSize: '1.25rem' }}
          >
            Demander mon diagnostic gratuit
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-6 text-gray-400 text-sm">
            ⚡ Réponse sous 24h • Sans engagement
          </p>
        </div>
      </section>
    </div>
  );
}