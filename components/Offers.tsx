/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from 'next/link';
import React from 'react';

interface OfferItem {
  name: string;
  price: string;
  subItems?: string[];
}

interface Offer {
  id: number;
  title: string;
  description: string;
  items: OfferItem[];
  totalPriceBeforeDiscount: number;
  totalDiscountedPrice: number;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Group Coaching at Gamir Academy",
    items: [
      { name: 'Mindset + Basics', price: 'Free' },
      { name: 'Money + Risk Management', price: 'Free' },
      { name: 'Fundamental Analysis', price: 'Free' },
      {
        name: 'Technical Analysis',
        price: '900 dh',
        subItems: [
          'Price Action',
          'SMC',
          'GM-gold Method'
        ]
      },
      { name: 'Secrets', price: '900 dh' },
      {
        name: 'Follow-up Sessions',
        price: 'Free',
      },
      {
        name:'Daily Analysis Group',
        price:'150 dh',
      }
     
    ],
    totalPriceBeforeDiscount: 2250,
    totalDiscountedPrice: 1950,
    description: ''
  },
  {
    id: 2,
    title: 'One-to-One Coaching Premium ',
    items: [
      { name: 'Personalized Sessions', price: '1000 dh' },
      { name: 'Direct Access to Head Coach', price: '1000 dh' },
      {
        name: 'Advanced Technical Analysis',
        price: 'Free',
        subItems: [
          'Price Action',
          'SMC',
          'GM-gold Method'
        ]
      },
      { name: 'Mastering Risk Management', price: 'Free' },
      { name: 'Exclusive Mentorship', price: '1100 dh' },
      { name: 'Unlimited Follow-up Sessions', price: 'Free' },
      {
        name:'Daily Analysis Group',
        price:'Free',
      }
    ],
    totalPriceBeforeDiscount: 4500,
    totalDiscountedPrice: 3100,
    description: ''
  },
];

const OffersCard: React.FC<{ offer: Offer }> = ({ offer }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2 flex flex-col justify-between h-full mb-10 lg:mb-0">
    <div className="flex flex-col flex-grow">
      <h3 className="text-slate-950 text-2xl font-bold mb-8">{offer.title}</h3>
      
      <ul className="list-none text-slate-950 mb-6 space-y-2 flex-grow">
        {offer.items.map((item, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex justify-between">
              <span className="text-gray-500">{item.name}</span>
              <span>{item.price}</span>
            </div>
            {item.subItems && (
              <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-gray-500">{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="flex justify-between">
          <span className="font-bold mt-5">Total Price Before Discount</span>
          <span className="text-red-500 mt-5 font-bold line-through">{offer.totalPriceBeforeDiscount} dh</span>
        </li>
        <li className="flex justify-between">
          <span className="font-bold ">Discounted Coaching Price</span>
          <span className="text-green-500 font-bold ">{offer.totalDiscountedPrice} dh</span>
        </li>
      </ul>
    </div>
    
    {/* Button to register */}
    <div className="text-center mt-auto">
      <Link
        href="/register"
        passHref
        className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 w-full rounded-md text-sm font-semibold mt-4">
        
          Register Now
        
      </Link>
    </div>
  </div>
);

const Offers: React.FC = () => (
  <section className="bg-slate-950 py-16" id="buy">
    <div className="container mx-auto px-4">
      <h1 className="text-white text-center text-4xl md:text-5xl font-extrabold mb-6">
        Join Us and Change Your Life
      </h1>
      <h2 className="text-orange-500 text-center text-2xl mb-10">
        Special Offer You Can't Miss!
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-stretch lg:space-x-10">
        {offers.map((offer) => (
          <OffersCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  </section>
);

export default Offers;
