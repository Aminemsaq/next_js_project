/* eslint-disable react/no-unescaped-entities */
import React , {useState} from 'react';
import { FaUsers, FaRegClock, FaUserCheck } from "react-icons/fa";

const cardsData = [
  {
    id: 1,
    icon: <FaUserCheck className="h-20 w-20 mb-8 ml-8 text-orange-600" />,
    number: "+1000",
    title: "Nombres d'étudiants",
    description: "Expérimentez notre expertise.",
  },
  {
    id: 2,
    icon: <FaUsers className="h-20 w-20 mb-8 text-orange-600" />,
    number: "+90%",
    title: "Taux de réussite",
    description: "Atteint par nos étudiants.",
  },
  {
    id: 3,
    icon: <FaRegClock className="h-20 w-20 mb-8 ml-2 text-orange-600" />,
    number: "+5",
    title: "Années d'expérience",
    description: "Dans l'industrie du trading.",
  },
];

const Proof = () => {
  return (
    <section className="py-2 md:py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="max-w-4xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
            About Gamir Academy
          </h2>
          <p className="text-lg mb-8 text-white text-center">
            Bienvenue à l'Académie Gamir, où l'apprentissage rencontre
            l'innovation. Notre mission est d'outiller les individus à travers
            une éducation exhaustive dans le domaine du trading et de la finance.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="px-3 py-14 flex flex-col items-center text-white bg-slate-950 lg:bg-transparent rounded-lg border-2 border-orange-500 transform transition-transform duration-300 hover:scale-105"
              >
                {card.icon}
                <div className="text-center">
                  <p className="text-5xl md:text-5xl font-semibold lg:text-white mb-3">
                    {card.number}
                  </p>
                  <p className="text-3xl md:text-xl font-semibold mb-1 lg:text-white">
                    {card.title}
                  </p>
                  <p className="text-xl lg:text-md text-white lg:text-white">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
