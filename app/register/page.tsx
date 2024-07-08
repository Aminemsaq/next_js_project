/* eslint-disable react/no-unescaped-entities */
// app/register/page.tsx
"use client";
/* eslint-disable react/no-unescaped-entities */
// app/register/page.tsx
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  typeOfTraining: string;
  nomcomplet: string;
  phone: string;
  city: string;
  email: string;
}

const Registration: React.FC = () => {
  const initialTrainingType = ''; // Replace with actual initial training type logic if needed
  const [formData, setFormData] = useState<FormData>({
    typeOfTraining: initialTrainingType,
    nomcomplet: '',
    phone: '',
    city: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.API_URL!, formData);


      console.log('Form submitted successfully:', response.data);

      // Optionally reset the form after successful submission
      setFormData({
        typeOfTraining: initialTrainingType,
        nomcomplet: '',
        phone: '',
        city: '',
        email: '',
      });

      // Show toast notification
      toast.success('Votre inscription a été soumise avec succès !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Redirect programmatically using window.location or other method
      window.location.href = '/'; // Example of redirecting to homepage
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state or display error message to user
      toast.error('Une erreur est survenue lors de la soumission du formulaire.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <nav className="bg-slate-950 px-5 py-5 fixed top-0 left-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link href="/" passHref aria-label="Home">
              GamirAcademy
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/"
              passHref
              className="bg-orange-600 text-white hover:bg-orange-400 px-2 py-2 md:px-5 md:py-2 rounded-md transition duration-300 cursor-pointer text-sm md:text-base"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-slate-950 pt-28 flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              REJOIGNEZ NOS PLANS AUJOURD’HUI
            </h2>
            <p className="text-center text-gray-600 mb-4">Et transformez votre vie !</p>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="mb-4">
                <label htmlFor="typeOfTraining" className="block text-sm font-medium text-gray-700">
                  Type de formation *
                </label>
                <select
                  name="typeOfTraining"
                  id="typeOfTraining"
                  value={formData.typeOfTraining}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800 sm:text-sm"
                >
                  <option value="">Sélectionnez une formation</option>
                  <option value="Gamir Academy (2000 Dhs)">Cours débutant à l'Académie Gamir (2000 Dhs)</option>
                  <option value="Coaching one-to-one premium (3000 Dhs)">Coaching One-to-One Premium (3000 Dhs)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="nomcomplet" className="block text-sm font-medium text-gray-700">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nomcomplet"
                    id="nomcomplet"
                    value={formData.nomcomplet}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800 sm:text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800 sm:text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Ville
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800 sm:text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
        <div className="flex justify-center items-center space-x-6">
          <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-3 lg:mt-5">
          &copy; 2024 Gamir Academy. Tous droits réservés.
        </div>
      </div>
    </>
  );
};

export default Registration;
