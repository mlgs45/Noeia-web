import { FileSearch, Rocket, LineChart } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ServicesPage() {
  const offers = [
    {
      icon: FileSearch,
      title: "Diagnostic Irritants & Gains",
      price: "À partir de 3 000 €",
      objective: "Objectif : identifier un potentiel de gains supérieur à l'investissement.",
      description: "Identification des leviers concrets pour récupérer du temps et de la marge.",
      items: [
        "Identification des points de friction qui ralentissent la performance",
        "Estimation chiffrée des gains potentiels (temps, coût, erreurs)",
        "Priorisation des actions selon impact financier",
        "Présentation claire au dirigeant avec scénarios de décision",
      ],
      duration: "2 à 4 semaines",
      deliverables: "Rapport d'analyse + roadmap priorisée",
    },
    {
      icon: Rocket,
      title: "Sprint Structuration & Automatisation",
      price: "8 000 à 20 000 €",
      objective: "Objectif : générer des résultats visibles en moins de 90 jours.",
      description: "Mise à plat des processus clés et déploiement d'améliorations mesurables.",
      items: [
        "Structuration de 2 à 4 processus stratégiques",
        "Implémentation des améliorations prioritaires",
        "Automatisations ciblées et mesurables",
        "Documentation claire et transfert aux équipes",
      ],
      duration: "4 à 8 semaines",
      deliverables: "Processus documentés + automatisations opérationnelles",
      featured: true,
    },
    {
      icon: LineChart,
      title: "Pilotage continu",
      price: "Sur devis",
      objective: null,
      description: "Optimisation continue de la performance opérationnelle.",
      items: [
        "Suivi trimestriel des indicateurs clés",
        "Identification continue de nouveaux leviers de performance",
        "Optimisation progressive des processus",
        "Support stratégique à la direction",
      ],
      duration: "Engagement de 6 à 12 mois",
      deliverables: "Tableaux de bord + optimisations régulières",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
            💼 Nos accompagnements
          </span>
          <h1 className="mb-6 text-[#0F172A]" style={{ fontSize: '3.5rem', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Des offres concrètes.<br />
            <span className="text-[#10b981]">Des résultats mesurables.</span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-xl" style={{ lineHeight: '1.7' }}>
            Modulaires, pragmatiques, orientées performance et gains financiers.
          </p>
        </div>
      </section>

      {/* Offres détaillées */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 transition-all hover:shadow-xl ${
                  offer.featured
                    ? "border-2 border-[#10b981] shadow-lg relative"
                    : "border border-gray-200 hover:border-[#10b981]"
                }`}
              >
                {offer.featured && (
                  <div className="mb-4 inline-flex items-center gap-1 bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-3 py-1 rounded-full" style={{ fontSize: '0.75rem', fontWeight: '700' }}>
                    <span>⭐</span>
                    <span>Le plus performant</span>
                  </div>
                )}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    offer.featured ? "bg-gradient-to-br from-[#10b981] to-[#059669]" : "bg-[#10b981]/10"
                  }`}>
                    <offer.icon className={`w-8 h-8 ${
                      offer.featured ? "text-white" : "text-[#10b981]"
                    }`} />
                  </div>
                </div>
                <h3 className="mb-3 text-[#0F172A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  {offer.title}
                </h3>
                <div className="mb-4 text-[#10b981]" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                  {offer.price}
                </div>
                {offer.objective && (
                  <div className="mb-4 p-3 bg-yellow-50 border-l-2 border-yellow-500 rounded">
                    <p className="text-gray-900" style={{ fontSize: '0.8125rem', lineHeight: '1.5', fontWeight: '600' }}>
                      {offer.objective}
                    </p>
                  </div>
                )}
                <p className="mb-6 text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>
                  {offer.description}
                </p>
                <div className="mb-6">
                  <p className="mb-3 text-gray-900" style={{ fontSize: '0.875rem', fontWeight: '700' }}>
                    Ce qui est inclus :
                  </p>
                  <ul className="space-y-2">
                    {offer.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#10b981] rounded-full mt-2"></span>
                        <span className="text-gray-700" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-200 space-y-2">
                  <p className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                    <span style={{ fontWeight: '700' }}>Durée :</span> {offer.duration}
                  </p>
                  <p className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                    <span style={{ fontWeight: '700' }}>Livrables :</span> {offer.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section Pourquoi ça fonctionne */}
          <div className="mt-20">
            <div className="bg-white rounded-2xl p-10 border-2 border-[#10b981] shadow-xl">
              <h2 className="mb-6 text-center text-[#0F172A]" style={{ fontSize: '2rem', fontWeight: '700' }}>
                Pourquoi ça fonctionne
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-gray-900 text-center" style={{ fontSize: '1.25rem', lineHeight: '1.7', fontWeight: '500' }}>
                  On ne peut pas automatiser le désordre.<br />
                  Nous structurons d'abord, nous mesurons ensuite, nous automatisons seulement ce qui crée un gain réel.
                </p>
                <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white p-6 rounded-xl text-center">
                  <p style={{ fontSize: '1.375rem', fontWeight: '700', lineHeight: '1.4' }}>
                    💰 Les gains identifiés financent souvent la transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 text-gray-700" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              Ces missions peuvent être combinées ou adaptées selon votre contexte.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#10b981] text-white px-8 py-4 rounded-xl hover:bg-[#059669] transition-all hover:scale-105 shadow-lg"
              style={{ fontSize: '1.125rem', fontWeight: '700' }}
            >
              Discutons de votre situation
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section image + pourquoi Noeia */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1732284081090-8880f1e1905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTY3MDQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Espace de travail moderne"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-[#0F172A]" style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.01em' }}>
                Pourquoi Noeia
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white" style={{ fontWeight: '700', fontSize: '1rem' }}>1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#0F172A]" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                      Pas de discours technologique abstrait
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      Nous parlons marge, performance et gains mesurables. Pas de jargon IA inutile.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white" style={{ fontWeight: '700', fontSize: '1rem' }}>2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#0F172A]" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                      Une équipe expérimentée
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      Des profils qui ont structuré, investi et accompagné des entreprises pendant 10 ans.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#10b981] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white" style={{ fontWeight: '700', fontSize: '1rem' }}>3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#0F172A]" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
                      Centré sur vos enjeux PME
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      Croissance, rentabilité, autonomie. Nous comprenons vos priorités de dirigeant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}