import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
        
        {/* Social Media */}
        <div className="text-left lg:text-left">
          <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
          <div className="flex justify-start lg:justify-start space-x-6">
            <a href="https://www.facebook.com/share/cnrMCz4VqzEZEwsT/?mibextid=LQQJ4d" className="text-gray-400 hover:text-white">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/gamir.academy/" className="text-gray-400 hover:text-white">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://wa.link/f0xy55" className="text-gray-400 hover:text-white">
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-left mt-10 lg:text-center  text-gray-500 text-sm">
        &copy; 2024 Gamir Academy. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
