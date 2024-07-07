import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-5 pt-12 bg-slate-950 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row  lg:justify-between">
        {/* Logo and Description */}
        <div className="mb-6 lg:mb-0 text-left lg:text-left">
          <h2 className="text-2xl font-bold">Gamir Academy</h2>
          <p className="text-gray-400 mt-2">Débloquez votre potentiel de trading avec nous.</p>
        </div>
        {/* Links */}
        <div className="flex lg:flex-row mb-6 lg:mb-0 lg:space-x-10 text-left lg:text-left">
          <div className="lg:mb-0 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Liens</h3>
            <ul className='flex flex-col gap-2 lg:flex-row lg:gap-4'>
              <li><a href="" className="text-gray-400  hover:text-white">Accueil</a></li>
              <li><a href="" className="text-gray-400  hover:text-white">À propos</a></li>
              <li><a href="" className="text-gray-400 hover:text-white">Offers</a></li>
              <li><a href="" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* Social Media */}
        <div className="text-left lg:text-left">
          <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
          <div className="flex justify-start lg:justify-start space-x-6">
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
        </div>
      </div>
      <div className="text-left mt-10  text-left lg:text-center  text-gray-500 text-sm">
        &copy; 2024 Gamir Academy. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
