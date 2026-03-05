import { Search, Map, Settings, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ApproachSection() {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Scan des irritants",
      description: "Identification des points de friction dans vos opérations",
    },
    {
      icon: Map,
      number: "2",
      title: "Cartographie des flux",
      description: "Visualisation complète de vos processus",
    },
    {
      icon: Settings,
      number: "3",
      title: "Structuration & standardisation",
      description: "Clarification et optimisation des méthodes",
    },
    {
      icon: Zap,
      number: "4",
      title: "Automatisation ciblée & pilotage",
      description: "Mise en place d'outils adaptés et mesure des résultats",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#0A1628' }}>
            La méthode Noeia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#0A1628] rounded-full flex items-center justify-center">
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E3A5F] rounded-full flex items-center justify-center text-white" style={{ fontWeight: '700', fontSize: '0.875rem' }}>
                    {step.number}
                  </div>
                </div>
                <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0A1628' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#1E3A5F] to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Image illustrative */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjBhdXRvbWF0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTY3MDIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Processus d'automatisation"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-[#0A1628] text-white p-8 rounded-xl text-center max-w-3xl mx-auto">
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontWeight: '500' }}>
            Nous ne vendons pas de l'IA.<br />
            <span style={{ fontWeight: '600' }}>Nous rendons votre entreprise prête à l'exploiter.</span>
          </p>
        </div>
      </div>
    </section>
  );
}