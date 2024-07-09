import Carrousels from '@/components/Carrousels';
import Fab from '@/components/Fab';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Offers from '@/components/Offers';
import Proof from '@/components/Proof';
import React from 'react';
import Head from 'next/head';



export default function Home() {
  return (
    <div>
      <Hero />
      <Proof />
      <Fab />
      <Carrousels />
      <Offers />
      <Faq />
      <Footer />
    </div>
  );
}
