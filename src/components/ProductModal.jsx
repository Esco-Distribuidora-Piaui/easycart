import React from "react";
import Image from "next/image";
import { useCart } from "../contexts/CartContext";

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-[90%] max-h-[90%] overflow-hidden relative text-blue-600 flex flex-col" onClick={(e) => e.stopPropagation()}>
        <button className="absolute text-2xl top-2 right-4 text-blue-600 font-bold cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110" onClick={onClose}>
            &times;
        </button>
        <div className="p-4 bg-gray-50 border-b border-blue-600 text-2xl font-semibold text-center text-blue-600">
          Detalhes do Produto
        </div>

        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Container da Imagem com tamanho fixo */}
          <div className="w-full md:w-[45%] h-[300px] flex justify-center items-center border-b md:border-b-0 md:border-r border-gray-300">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Informações do Produto */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-blue-600 font-bold text-2xl text-center mb-4 break-all">{product.name}</h2>

              <div className="mb-4">
                <h3 className="text-blue-600 font-semibold text-lg mb-1">Descrição</h3>
                <p className="text-blue-600 text-justify overflow-y-auto min-h-[60px] max-h-[150px]">
                  {product.description}
                </p>
              </div>

              {/* Preço e Status */}
              <div className="flex justify-between items-center mb-4">
                <p className="text-base text-blue-600">
                  <strong>Preço:</strong> {product.price}
                </p>
                <p className="text-base text-blue-600">
                  <strong>Status:</strong> {product.status}
                </p>
              </div>
            </div>

            {/* Botão Adicionar ao Carrinho */}
            <button
              className="w-full md:w-auto mt-2 py-3 px-6 bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
              onClick={handleAddToCart}
            >
              <Image
                src="/icons/shopping_cart_40dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg"
                alt="Adicionar ao Carrinho"
                width={24}
                height={24}
                className="mr-2"
              />
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;