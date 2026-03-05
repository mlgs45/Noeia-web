import { FileSearch, Rocket, LineChart } from "lucide-react";

export function OffersSection() {
  const offers = [
    {
      icon: FileSearch,
      title: "Diagnostic Irritants & Gains",
      items: [
        "Identification des leviers prioritaires",
        "Estimation chiffrée des gains",
        "Plan d'action priorisé",
      ],
    },
    {
      icon: Rocket,
      title: "Sprint Structuration & Automatisation",
      items: [
        "Mise à plat des processus clés",
        "Implémentation des quick wins",
        "Automatisations ciblées",
      ],
      featured: true,
    },
    {
      icon: LineChart,
      title: "Pilotage continu",
      items: [
        "Suivi trimestriel",
        "Optimisation progressive",
        "Veille et amélioration continue",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#0A1628' }}>
            Nos offres
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 p-8 ${
                offer.featured
                  ? "border-[#0A1628] shadow-lg relative"
                  : "border-gray-200"
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0A1628] text-white px-4 py-1 rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                  Recommandé
                </div>
              )}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  offer.featured ? "bg-[#0A1628]" : "bg-[#1E3A5F]/10"
                }`}>
                  <offer.icon className={`w-8 h-8 ${
                    offer.featured ? "text-white" : "text-[#1E3A5F]"
                  }`} />
                </div>
              </div>
              <h3 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0A1628' }}>
                {offer.title}
              </h3>
              <ul className="space-y-3">
                {offer.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#1E3A5F] rounded-full mt-2"></span>
                    <span className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
