import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0A1628] to-[#1E3A5F] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte à gauche */}
          <div>
            <h1 className="mb-6 tracking-tight" style={{ fontSize: '3rem', lineHeight: '1.1', fontWeight: '600' }}>
              Noeia – Structurer, simplifier et automatiser ce qui fait perdre du temps.
            </h1>
            <p className="mb-8 text-gray-200" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              Nous aidons les PME à identifier leurs irritants opérationnels, clarifier leurs processus et automatiser intelligemment pour augmenter leur productivité sans recruter.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-[#0A1628] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
              Demander un diagnostic
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Image à droite */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzcxNTc4OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Équipe professionnelle en réunion stratégique"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}