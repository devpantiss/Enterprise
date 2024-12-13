// ProgramsSection.tsx
import React from "react";

interface Program {
  title: string;
  description: string;
  buttonText: string;
}

const programs: Program[] = [
  {
    title: "Pfizer INDovation NIPER-A Edition",
    description:
      "Pfizer INDovation: NIPER-A Edition, with Social Alpha, Pfizer and NIPER Ahmedabad as anchor partners is designed to support start-ups building high-quality affordable diagnostics. NIPER Ahmedabad will offer their lab infrastructure and technical expertise for product development. Social Alpha as the anchor partner for INDovation, will curate the innovations and support venture development for the selected cohort.",
    buttonText: "VIEW DETAILS",
  },
  {
    title: "Techtonic – Innovations for Future Ready Migrant Workforce",
    description:
      "Over 200 million individuals from India’s marginalised communities depend on internal migration as a means of their livelihood. Given the growing impact of climate change and climate action on rural livelihoods, migration will continue to increase as a livelihood strategy. Social Alpha has launched Techtonic – Innovations for Future Ready Migrant Workforce in partnership with the Migrants Resilience Collaborative. The objective of this program is to create a stack of innovative and viable solutions that collectively catalyse upward mobility for migrant workers, contributing to a more sustainable, inclusive and equitable future.",
    buttonText: "VIEW DETAILS",
  },
];

const ProgramsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-orange-500 text-sm font-bold uppercase">
          Call for Applications
        </p>
        <h2 className="text-3xl font-bold text-black  mb-8">
          Our programs help founders through different stages
          <br />
          of their growth journey.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 p-6 flex flex-col flex-start shadow-lg rounded-lg">
              <h3 className="text-xl text-left font-semibold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-700 text-left mb-6">{program.description}</p>
              <button className="px-6 py-2 bg-black text-white font-medium rounded">
                {program.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
