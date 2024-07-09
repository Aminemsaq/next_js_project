"use client";
import { useState } from 'react';

const FaqSection = () => {
  const faqItems = [
    {
      question: "Ch7al l'moda de la formation ?",
      answer:
        "1,5 mois de coaching - 18 seances(3 seances par semaine) + les seances de suivie et pratique.",
    },
    {
      question: "Kifache kayedouzo les seances ?",
      answer:
        "Seance en ligne en Google meet a 22.00, kankhaliwe likom record neta3e la seance mora kola hissa.",
    },
    {
      question: "Wach koulchi i9edere idir les resultas ?",
      answer:
        "Coaching dyalna 100% ghadi dir bih resultas ila tebe99ety lema3lomat li kheditti 100%.",
    },
    {
      question: "Achenou ghadi ikoune mora le coaching ?",
      answer:
        "Seances de suivie le weekend + acces les groupes li kanhetto fih daily analysis.",
    },
    {
      question: "Support 24/24h 7/7j",
      answer:
        "Kan3etiwekoume whatssap personnel dyalna ayi we9ita kankounou m3akoum.",
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          FAQ - Questions fréquentes
        </h2>
        <p className="text-lg mb-8 text-white">
          Vous trouverez ci-dessous les réponses aux questions courantes sur notre académie et nos cours de trading.
        </p>
      </div>
      <div className="flex justify-center">
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white text-gray-900"
          data-inactive-classes="text-gray-500"
          className="max-w-3xl w-full max-h-[500px] overflow-y-auto"
        >
          {faqItems.map((item, index) => (
            <div key={index}>
              <h2 id={`accordion-flush-heading-${index + 1}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 px-6 font-medium text-left text-white border-b border-gray-200 hover:bg-orange-600 focus:outline-none"
                  data-accordion-target={`#accordion-flush-body-${index + 1}`}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-flush-body-${index + 1}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className='pr-5'>{item.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform transform ${activeIndex === index ? 'rotate-0' : 'rotate-180'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-flush-body-${index + 1}`}
                className={`px-6 ${activeIndex === index ? 'block py-5' : 'hidden'}`}
                aria-labelledby={`accordion-flush-heading-${index + 1}`}
              >
                <p className="text-gray-400">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
