/* eslint-disable react/no-unescaped-entities */
import { BsCheckCircle } from "react-icons/bs";

const FeaturesSection = () => {
  return (
    <section className="text-white py-16 md:py-8" id="features">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-5">Ce Que Vous Apprendrez</h2>
        <p className="text-lg mb-10 px-5 md:px-80 ">
          Maîtrisez l'Analyse Technique, Gérez les Risques et Développez la Psychologie du Trader avec Gamir Academy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-5">
          <div className="p-6 border rounded-lg shadow-md bg-orange-600">
            <BsCheckCircle className="text-3xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Analyse Technique Avancée</h3>
            <p className="text-lg">
              Maîtrisez les techniques d'analyse technique pour identifier les tendances et les points d'entrée stratégiques sur les marchés financiers.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-gray-900">
            <BsCheckCircle className="text-3xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Gestion des Risques</h3>
            <p className="text-lg">
              Apprenez à gérer efficacement vos risques en utilisant des stratégies de gestion des positions et de diversification de portefeuille.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-gray-900">
            <BsCheckCircle className="text-3xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Psychologie du Trader</h3>
            <p className="text-lg">
              Comprenez les aspects psychologiques du trading, y compris la gestion des émotions et la discipline nécessaire pour réussir à long terme.
            </p>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default FeaturesSection;
