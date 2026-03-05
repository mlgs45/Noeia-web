import { Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8" style={{ fontSize: '3rem', fontWeight: '600', lineHeight: '1.2' }}>
          Et si votre entreprise disposait déjà de 20% de capacité cachée ?
        </h2>
        <p className="mb-10 text-gray-200 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
          Identifions ensemble vos leviers de productivité et calculons le ROI de votre transformation.
        </p>
        <button className="inline-flex items-center gap-3 bg-white text-[#0A1628] px-10 py-5 rounded-lg hover:bg-gray-100 transition-colors shadow-xl" style={{ fontWeight: '600', fontSize: '1.25rem' }}>
          <Calendar className="w-6 h-6" />
          Planifier un échange stratégique
        </button>
      </div>
    </section>
  );
}
