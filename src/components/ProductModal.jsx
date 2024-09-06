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
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded max-w-[800px] w-[90%] max-h-[90%] flex flex-col relative overflow-hidden text-blue-600" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-[2px] right-4 text-blue-600 font-bold text-xl transition-transform transform hover:scale-105 cursor-pointer" onClick={onClose}>
          x
        </button>
        <div className="p-4 text-center bg-gray-100 border-b border-blue-600 font-bold text-2xl text-blue-600">
          <h1>Detalhes do Produto</h1>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-0 flex justify-center items-center p-5 border-r border-gray-300 w-[40%]">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="flex-1 p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <h2 className="text-blue-600 font-bold text-2xl text-center mb-2 break-all">
                {product.name}
              </h2>
              <h3 className="text-blue-600 font-bold text-xl text-center">Descrição</h3>
              <h4 className="text-lg text-blue-600 text-justify mb-5">{product.description}</h4>
            </div>
            <div className="flex justify-between items-center text-blue-600">
              <div>
                <p className="text-justify text-base">
                  <strong>Preço:</strong> {product.price}
                </p>
                <p className="text-justify text-base">
                  <strong>Status:</strong> {product.status}
                </p>
              </div>
              <button
                className="flex items-center justify-between bg-blue-600 text-white px-5 py-2 rounded text-lg hover:scale-105 transition-transform"
                onClick={handleAddToCart}
              >
                <Image
                  src="/icons/shopping_cart_40dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg"
                  alt="Adicionar ao Carrinho"
                  width={30}
                  height={30}
                />
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;