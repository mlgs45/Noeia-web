import { AlertCircle, Copy, FileText, MessagesSquare, Timer, TrendingDown } from "lucide-react";

export function ProblemSection() {
  const problems = [
    { icon: Copy, text: "Double saisie" },
    { icon: FileText, text: "Reporting manuel" },
    { icon: TrendingDown, text: "Manque de standardisation" },
    { icon: MessagesSquare, text: "Mauvaise circulation d'information" },
    { icon: Timer, text: "Validations lentes" },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#0A1628' }}>
            Pourquoi l'IA seule ne suffit pas
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              <span className="text-[#1E3A5F]" style={{ fontWeight: '600' }}>L'IA n'optimise pas le désordre.</span><br />
              Avant d'automatiser, il faut clarifier les flux, structurer les responsabilités et rendre les processus mesurables.
            </p>
            <p className="text-gray-700" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              Les PME perdent souvent <span className="text-[#1E3A5F]" style={{ fontWeight: '600' }}>15 à 30% de leur capacité</span> dans :
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-[#1E3A5F]" />
              </div>
              <span className="text-gray-800" style={{ fontWeight: '500' }}>
                {problem.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
