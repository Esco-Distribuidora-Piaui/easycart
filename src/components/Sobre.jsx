import React from 'react';
import Image from 'next/image';

const Sobre = () => {
  return (
    <section id="sobre" className="text-center pt-10 mt-10 mb-10 py-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mx-auto w-full max-w-md mb-0"> {/* Remova o espaço extra ao redor da imagem */}
            <Image 
              alt="Logo do EasyCart"
              src="img/logocomnome.svg"
              width={400}
              height={100}
              // layout="responsive"
            />
          </div>
            <p className="text-lg mt-2 font-openSans"> {/* Reduza a margem superior do parágrafo */}
                O EasyCart é uma vitrine digital projetada para quem busca uma plataforma eficiente e acessível para expor e vender seus produtos online, simplificando cada etapa do processo de vendas, desde a exposição dos produtos até a montagem do pedido.
            </p>
        </div>
    </section>
  );
};

export default Sobre;
