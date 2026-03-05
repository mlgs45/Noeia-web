import { Target, Users, TrendingUp } from "lucide-react";

export function WhyNoeia() {
  const values = [
    {
      icon: Target,
      title: "Approche pragmatique",
      description: "Pas de discours technologique abstrait",
    },
    {
      icon: Users,
      title: "Accompagnement structuré",
      description: "Un partenaire qui comprend les enjeux PME",
    },
    {
      icon: TrendingUp,
      title: "Orienté résultats",
      description: "Focus sur les gains mesurables et concrets",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#0A1628' }}>
            Pourquoi Noeia
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Une approche pragmatique. Pas de discours technologique abstrait. Un accompagnement structuré, orienté résultats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#0A1628] rounded-xl flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0A1628' }}>
                {value.title}
              </h3>
              <p className="text-gray-600" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
