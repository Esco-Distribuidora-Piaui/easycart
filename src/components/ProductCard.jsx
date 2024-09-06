import React, { useState } from "react";
import Image from "next/image";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="relative flex flex-col justify-center items-center border border-gray-300 rounded-lg p-2 w-64 h-96 shadow-lg text-center transition-transform duration-200 ease-in-out hover:scale-105 group cursor-pointer"
        onClick={openModal}
      >
        <div className="flex justify-center items-center h-40 w-full overflow-hidden">
          <Image
            className="w-auto h-full object-contain"
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        {/* Ícones que aparecem ao passar o mouse */}
        <div className="absolute bottom-2 right-2 opacity-0 m-2 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <Image
            src="/icons/cart.svg"
            alt="Adicionar ao Carrinho"
            width={30}
            height={30}
          />
        </div>
        <div className="absolute bottom-2 left-2 opacity-0 m-2 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <Image
            src="/icons/product-details.svg"
            alt="Detalhes do Produto"
            width={30}
            height={30}
          />
        </div>

        <div className="mt-4 flex flex-col items-center">
          <h2 className="text-blue-600 text-lg font-bold mb-1">
            {product.name}
          </h2>
          <p className="text-blue-800 text-xl font-bold mb-2">
            {product.price}
          </p>
          <p className="text-green-600 text-sm font-bold">{product.status}</p>
        </div>
      </div>

      {isModalOpen && <ProductModal product={product} onClose={closeModal} />}
    </>
  );
};

export default ProductCard;
