import { Clock, ShieldCheck, Eye, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ResultsSection() {
  const results = [
    {
      icon: Clock,
      text: "10 à 30% de temps récupéré sur les tâches répétitives",
    },
    {
      icon: ShieldCheck,
      text: "Moins d'erreurs et de retards",
    },
    {
      icon: Eye,
      text: "Meilleure visibilité pour le dirigeant",
    },
    {
      icon: TrendingUp,
      text: "Capacité à absorber plus d'activité sans recruter",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#0A1628' }}>
            Des gains concrets et mesurables
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Liste des résultats */}
          <div className="grid grid-cols-1 gap-6">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-14 h-14 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                  <result.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-800 pt-2" style={{ fontSize: '1.0625rem', lineHeight: '1.6', fontWeight: '500' }}>
                  {result.text}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwcm9kdWN0aXZpdHl8ZW58MXx8fHwxNzcxNjA3ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Espace de travail moderne et productif"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#1E3A5F] text-white p-8 rounded-xl text-center mt-12">
          <p style={{ fontSize: '1.375rem', fontWeight: '600', lineHeight: '1.5' }}>
            Les gains identifiés financent souvent la transformation.
          </p>
        </div>
      </div>
    </section>
  );
}