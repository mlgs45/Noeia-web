import { Search, Map, Settings, Zap, Target, Users, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function AboutPage() {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Scan des irritants",
      description: "Entretiens avec les équipes, observation des flux, analyse des données. Nous identifions ce qui ralentit vraiment vos opérations.",
    },
    {
      icon: Map,
      number: "2",
      title: "Cartographie des flux",
      description: "Nous rendons visible ce qui est souvent implicite : les processus métier, les responsabilités, les points de blocage.",
    },
    {
      icon: Settings,
      number: "3",
      title: "Structuration & standardisation",
      description: "Clarification des rôles, optimisation des méthodes, documentation des bonnes pratiques pour créer une base solide.",
    },
    {
      icon: Zap,
      number: "4",
      title: "Automatisation ciblée & pilotage",
      description: "Mise en place d'outils adaptés, automatisations mesurables et suivi régulier des indicateurs de performance.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Pas de discours technologique abstrait",
      description: "Nous parlons résultats mesurables, gains de temps et ROI. Pas de jargon IA inutile.",
    },
    {
      icon: Users,
      title: "Une équipe expérimentée",
      description: "Des profils qui ont structuré, investi et accompagné des entreprises pendant 10 ans.",
    },
    {
      icon: Briefcase,
      title: "Centré sur vos enjeux PME",
      description: "Croissance, rentabilité, autonomie opérationnelle. Nous comprenons vos priorités de dirigeant.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
            👥 À propos
          </span>
          <h1 className="mb-6 text-[#0F172A]" style={{ fontSize: '3.5rem', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Qui sommes-nous
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Noeia est né d'un constat simple : la plupart des PME perdent 15 à 30% de leur capacité dans des tâches qui pourraient être simplifiées ou automatisées.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Nous aidons les dirigeants de PME industrielles et de services B2B à retrouver cette capacité cachée, sans recruter, en structurant leurs processus avant d'automatiser intelligemment.
          </p>
        </div>
      </section>

      {/* La méthode */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              ✓ La méthode Noeia
            </span>
            <h2 className="mb-4 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              La méthode Noeia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              Une démarche éprouvée en 4 étapes pour transformer durablement vos opérations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#10b981] transition-all hover:shadow-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-white border-2 border-white" style={{ fontWeight: '800', fontSize: '0.875rem' }}>
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#0F172A]" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg" style={{ lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#0F172A] text-white p-10 rounded-2xl text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/20 rounded-full blur-3xl"></div>
            <p className="relative z-10" style={{ fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '600' }}>
              Nous ne vendons pas de l'IA.<br />
              <span style={{ fontWeight: '800' }} className="text-[#34d399]">Nous rendons votre entreprise prête à l'exploiter.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi Noeia */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              💡 Nos valeurs
            </span>
            <h2 className="mb-4 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Pourquoi Noeia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="mb-4 text-[#0F172A]" style={{ fontSize: '1.375rem', fontWeight: '700' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-12 border-2 border-[#10b981] shadow-xl">
            <h2 className="mb-6 text-center text-[#0F172A]" style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Notre engagement
            </h2>
            <div className="space-y-6 text-gray-700" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              <p>
                Nous ne promettons pas de miracle. Nous accompagnons des transformations pragmatiques qui génèrent des gains mesurables en quelques semaines.
              </p>
              <p>
                Notre approche est orientée <span className="text-[#10b981]" style={{ fontWeight: '700' }}>ROI et productivité</span>. Les gains identifiés financent souvent la transformation elle-même.
              </p>
              <p>
                Nous travaillons main dans la main avec vos équipes, sans imposer de solutions toutes faites. Chaque PME a ses spécificités, et notre rôle est de les comprendre pour proposer des leviers adaptés.
              </p>
            </div>
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
          <h2 className="mb-6" style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            Prêt à transformer votre PME ?
          </h2>
          <p className="mb-10 text-gray-200 max-w-2xl mx-auto text-xl" style={{ lineHeight: '1.6' }}>
            Découvrez vos gains cachés avec un diagnostic gratuit
          </p>
          <Link
            to="/diagnostic"
            className="inline-flex items-center gap-3 bg-[#10b981] text-white px-10 py-5 rounded-xl hover:bg-[#059669] transition-all hover:scale-105 shadow-2xl"
            style={{ fontWeight: '700', fontSize: '1.25rem' }}
          >
            Demander mon diagnostic
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}