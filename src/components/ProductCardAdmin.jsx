import React, { useState } from 'react';
import Image from 'next/image';
import ProductModalAdmin from './ProductModalAdmin';

const ProductCardAdmin = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedProduct) => {
    console.log('Produto atualizado:', updatedProduct);
    handleClose();
  };

  return (
    <>
      <div className="group flex flex-row border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm w-full text-blue-600 max-w-none p-2 items-center relative justify-between transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-primary-color hover:shadow-sm h-[100px]">  
        {/* Card principal com borda, sombra e efeito hover */}
        <div className="flex-none w-[100px] h-auto object-cover mr-5"> {/* Imagem do produto */}
          <Image 
            src={product.image} 
            alt={product.name} 
            width={300}
            height={300} 
            layout="responsive" 
          />
        </div>
        <div className="h-full border-r border-gray-300 mr-5"> {/* Separador vertical */}
        </div>
        <div className="flex-1 flex justify-between items-center text-left"> {/* Detalhes do produto */}
          <h2 className="text-lg font-bold truncate max-w-[300px] m-0"> 
            {product.name}
          </h2>
          <p className="text-base m-0 pl-5 truncate max-w-[300px]"> 
            {product.description}
          </p>
          <p className="text-base m-0 pl-5 truncate max-w-[300px]"> 
            {product.price}
          </p>
          <p className="text-base m-0 pl-5 truncate max-w-[300px]"> 
            {product.status}
          </p>
        </div>
        <div className="relative opacity-0 ml-5 mr-3 transition-opacity duration-200 ease-in-out group-hover:opacity-100 cursor-pointer"> 
          {/* Ícone de edição com opacidade controlada pelo hover */}
          <Image
            src="/icons/edit.svg"
            alt="Editar Produto"
            width={30}
            height={30}
            onClick={handleEditClick}
          />
        </div>
      </div>
      {isModalOpen && (
        <ProductModalAdmin
          product={product}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default ProductCardAdmin;