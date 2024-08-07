/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Head from "next/head";
import { BsPlayFill } from "react-icons/bs"; // Import the play icon from React Icons
import Image from "next/image"; // Import Image component from Next.js
import RefreshLink from "./RefreshLink";
import { motion } from "framer-motion"; // Import framer-motion

const HeroSection = () => {
  const thumbnailWebp = "/images/image.webp"; // Path to your WebP thumbnail
  const [showVideo, setShowVideo] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <div>
      <Head>
        <title>Gamir Academy - Transformez Votre Vie Grâce au Trading</title>
        {/* Add other meta tags as needed */}
      </Head>
      <nav className="bg-slate-950 p-5 fixed top-0 left-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <RefreshLink href="/" aria-label="Home">
              GamirAcademy
            </RefreshLink>
          </div>
          <div className="flex bg-orange-600 text-white hover:bg-orange-400 px-2 py-2 md:px-5 md:py-2 rounded-md transition duration-300 cursor-pointer text-sm md:text-base">
            <RefreshLink href="/register">
              Inscrire dans le cours
            </RefreshLink>
          </div>
        </div>
      </nav>

      <section
        className="bg-slate-950 text-white min-h-screen flex justify-center pt-24 lg:pt-34 md:items-center"
        id="home"
      >
        <div className="container mx-auto text-center lg:px-9 pt-15">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 mt-14 px-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Kan3elmok, Kattabe9
            <span className="text-orange-500">, Katbedel 7yatek.</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-12 px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Apprenez à trader en suivant des étapes simples et efficaces.
            Transformez vos finances et atteignez vos objectifs grâce à Gamir
            Academy.
          </motion.p>
          <div className="mb-6 relative">
            {showVideo ? (
              <motion.div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/IG52nIxyNTU"
                  title="Formation trading"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div onClick={handleImageClick} className="relative">
                  <Image
                    src={thumbnailWebp}
                    alt="Thumbnail"
                    layout="responsive"
                    width={500}
                    height={500}
                    priority
                    className="cursor-pointer opacity-80 px-3 h-[150px]"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-orange-600 rounded-full">
                      <BsPlayFill
                        size={60}
                        color="#fff"
                        className="mr-16 cursor-pointer ml-5"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
