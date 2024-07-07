/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from 'next/link';
import React from 'react';

interface OfferItem {
  name: string;
  price: number;
}

interface Offer {
  id: number;
  title: string;
  description: string;
  items: OfferItem[];
  totalDiscountedPrice: number;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Cours débutant à l'Académie Gamir",
    description: 'Valeurs du coaching',
    items: [
      { name: 'Fondamentaux + Mentalité', price: 500 },
      { name: 'Gestion de l\'argent + Risques', price: 1000 },
      { name: 'Analyses fondamentales', price: 2000 },
      { name: 'Analyse technique', price: 1500 },
      { name: 'Secrets', price: 3500 },
      { name: 'Sessions de suivi', price: 500 },
    ],
    totalDiscountedPrice: 7200,
  },
  {
    id: 2,
    title: 'Coaching One-to-One Premium',
    description: 'Coaching individuel',
    items: [
      { name: 'Sessions de stratégie personnalisées', price: 2500 },
      { name: 'Accès direct au coach principal', price: 3000 },
      { name: 'Analyse technique avancée', price: 3500 },
      { name: 'Maîtrise de la gestion des risques', price: 4000 },
      { name: 'Mentorat exclusif', price: 5000 },
      { name: 'Sessions de suivi illimitées', price: 1000 },
    ],
    totalDiscountedPrice: 15200,
  },
];

const OffersCard: React.FC<{ offer: Offer }> = ({ offer }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 mb-10 lg:mb-0">
    <div className="flex items-center mb-2">
      <h3 className="text-black text-2xl font-bold">{offer.title}</h3>
    </div>
    
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-full">
        <p className="text-lg font-semibold mb-5">{offer.description}</p>
        <ul className="list-none text-black mb-6 space-y-2">
          {offer.items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-gray-500">{item.name}</span>
              <span>{item.price} dh</span>
            </li>
          ))}
          <li className="flex justify-between">
            <span className="font-bold mt-5">Prix de coaching</span>
            <span className="text-green-500 mt-5 font-bold">{offer.totalDiscountedPrice} dh</span>
          </li>
        </ul>
       
        {/* Button to register */}
        <div className="text-center">
          <Link
            href="/register"
            passHref
            className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 w-full rounded-md text-sm font-semibold mt-4">
            
              S'inscrire maintenant
            
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Offers: React.FC = () => (
  <section className="bg-slate-950 py-16" id="buy">
    <div className="container mx-auto px-4">
      <h1 className="text-white text-center text-4xl md:text-5xl font-extrabold mb-6">
        Rejoignez-nous et changez votre vie
      </h1>
      <h2 className="text-orange-500 text-center text-2xl mb-10">
        Offre Spéciale à ne pas manquer !
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10">
        {offers.map((offer) => (
          <OffersCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  </section>
);

export default Offers;
