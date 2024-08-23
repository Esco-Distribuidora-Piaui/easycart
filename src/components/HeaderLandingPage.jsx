import React from 'react';
import Image from 'next/image';


const HeaderLandingPage = () => {
  return (
    <header className="bg-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="img/logoEasyCart.svg" alt="Logo" className="h-8 " />

        </div>
        
        {/* Menu */}
        <nav className="flex space-x-8">
          <a href="#sobre" className="text-black hover:text-gray-700">Sobre</a>
          <a href="#parcerias" className="text-black hover:text-gray-700">Parcerias</a>
          <a href="#contatos" className="text-black hover:text-gray-700">Contatos</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLandingPage;