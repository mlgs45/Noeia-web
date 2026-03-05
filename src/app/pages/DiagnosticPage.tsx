import { ArrowRight, Eye, FileText, Clock, Database, TrendingUp, Target, CheckCircle2, Lightbulb } from "lucide-react";
import { Link } from "react-router";

export function DiagnosticPage() {
  const problems = [
    {
      icon: Eye,
      text: "Manque de visibilité sur les processus clés",
    },
    {
      icon: FileText,
      text: "Double saisie et reporting manuel",
    },
    {
      icon: Clock,
      text: "Validations internes lentes",
    },
    {
      icon: Database,
      text: "Données peu exploitables",
    },
    {
      icon: TrendingUp,
      text: "Difficulté à absorber plus d'activité",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Répondez à 7 à 8 questions simples",
      description: "Des questions ciblées sur votre organisation et vos processus opérationnels.",
    },
    {
      number: "2",
      title: "Obtenez une estimation de votre potentiel",
      description: "Un score de maturité et une évaluation de votre capacité d'optimisation.",
    },
    {
      number: "3",
      title: "Identifiez si un échange est pertinent",
      description: "Des recommandations claires sur les actions prioritaires à mener.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      text: "Un score de maturité opérationnelle",
    },
    {
      icon: TrendingUp,
      text: "Une estimation du potentiel d'amélioration",
    },
    {
      icon: Lightbulb,
      text: "Des pistes prioritaires d'optimisation",
    },
    {
      icon: CheckCircle2,
      text: "Une recommandation claire sur la suite à donner",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-6 px-4 py-2 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
            ⚡ Flash Diagnostic
          </span>
          <h1 className="mb-8 text-[#0F172A]" style={{ fontSize: '4rem', fontWeight: '700', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
            Et si votre entreprise disposait déjà de <span className="text-[#10b981]">20% de capacité cachée</span> ?
          </h1>
          <p className="mb-6 text-gray-900 text-2xl" style={{ fontWeight: '600', lineHeight: '1.5' }}>
            En 3 minutes, évaluez le potentiel d'optimisation de votre organisation.
          </p>
          <p className="mb-12 text-gray-700 max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            La majorité des PME perdent du temps et de la marge dans des tâches répétitives, des validations lentes et des processus non structurés.
            <br />
            Ce diagnostic rapide vous permet d'identifier votre niveau de maturité opérationnelle.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#10b981] text-white px-10 py-5 rounded-xl hover:bg-[#059669] transition-all hover:scale-105 shadow-2xl"
              style={{ fontWeight: '700', fontSize: '1.25rem' }}
            >
              Lancer le diagnostic gratuit
              <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="text-gray-500" style={{ fontSize: '0.875rem' }}>
              Sans engagement • 3 minutes • Résultats immédiats
            </p>
          </div>
        </div>
      </section>

      {/* Section Problème */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              ⚠️ Le contexte
            </span>
            <h2 className="mb-6 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Pourquoi faire ce diagnostic ?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
              L'IA et l'automatisation ne créent pas de performance si l'organisation n'est pas structurée.
              <br />
              Avant d'investir, il est essentiel de comprendre où se situent réellement les pertes de temps et les inefficacités.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-transparent hover:border-[#10b981] transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center">
                    <problem.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700" style={{ fontSize: '1rem', fontWeight: '600', lineHeight: '1.5' }}>
                    {problem.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              📋 Méthodologie
            </span>
            <h2 className="mb-4 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Comment fonctionne le Flash Diagnostic ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#10b981] transition-all h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-2xl flex items-center justify-center mx-auto" style={{ fontSize: '2rem', fontWeight: '800' }}>
                      {step.number}
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-[#0F172A]" style={{ fontSize: '1.375rem', fontWeight: '700', lineHeight: '1.3' }}>
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-600" style={{ fontSize: '1.0625rem', lineHeight: '1.6' }}>
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[#10b981]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 border-l-4 border-[#10b981]">
            <p className="text-gray-700 text-center" style={{ fontSize: '1.0625rem', lineHeight: '1.7', fontStyle: 'italic' }}>
              Ce diagnostic ne remplace pas un audit complet.
              <br />
              Il permet de mesurer rapidement votre niveau de maturité organisationnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Ce que vous allez obtenir */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              🎯 Résultats
            </span>
            <h2 className="mb-4 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              À l'issue du diagnostic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-transparent hover:border-[#10b981] transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-gray-700 pt-2" style={{ fontSize: '1.125rem', fontWeight: '600', lineHeight: '1.5' }}>
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#10b981] to-[#059669] text-white p-8 rounded-2xl text-center shadow-xl">
            <p style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.4' }}>
              💰 Dans de nombreux cas, les gains identifiés financent les actions correctives.
            </p>
          </div>
        </div>
      </section>

      {/* Positionnement Noeia */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
              💡 Notre approche
            </span>
            <h2 className="mb-8 text-[#0F172A]" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Pourquoi Noeia ?
            </h2>
          </div>

          <div className="bg-[#0F172A] text-white p-12 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center space-y-6">
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6', fontWeight: '600' }}>
                Nous ne vendons pas de l'IA pour faire moderne.
              </p>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6', fontWeight: '600' }}>
                Nous structurons d'abord l'organisation pour la rendre performante et automatisable.
              </p>
              <p className="text-[#34d399]" style={{ fontSize: '1.75rem', lineHeight: '1.4', fontWeight: '800', marginTop: '2rem' }}>
                L'optimisation commence par la clarté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#10b981] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#34d399] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34d399] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="mb-8" style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            Prêt à mesurer votre potentiel ?
          </h2>
          <p className="mb-10 text-gray-200 max-w-2xl mx-auto text-xl" style={{ lineHeight: '1.6' }}>
            3 minutes pour identifier vos leviers de croissance cachés
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#10b981] text-white px-10 py-5 rounded-xl hover:bg-[#059669] transition-all hover:scale-105 shadow-2xl"
            style={{ fontWeight: '700', fontSize: '1.25rem' }}
          >
            Accéder au diagnostic gratuit
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-6 text-gray-300" style={{ fontSize: '0.9375rem' }}>
            Réservé aux dirigeants et équipes de direction.
          </p>
        </div>
      </section>
    </div>
  );
}
