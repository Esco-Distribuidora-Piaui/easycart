import React, { useState } from 'react';
import Image from 'next/image';
import { exampleProducts } from "../../produtos/exemplos";

const ProductModalAdmin = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const statusOptions = [
    { value: 'Disponível', label: 'Disponível' },
    { value: 'Indisponível', label: 'Indisponível' },
  ];

  const tags = [...new Set(exampleProducts.map(product => product.tag))];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="relative bg-white rounded-lg max-w-4xl w-11/12 max-h-[90%] flex flex-col overflow-hidden text-blue-600" onClick={(e) => e.stopPropagation()}>
        <button className="absolute text-xl top-2 right-4 text-primary-color font-bold cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110" onClick={onClose}>x</button>
        <div className="p-4 bg-gray-100 border-b border-primary-color text-xl font-bold text-center border-b border-blue-600">
          Editar Produto
        </div>
        <form className="flex flex-1 overflow-hidden" onSubmit={handleSubmit}>
          <div className="flex-none w-[45%] flex justify-center items-center border-r border-gray-300 p-5">
            <Image 
              src={formData.image} 
              alt={formData.name} 
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="flex-1 p-5 overflow-y-auto">
            <label className="block mb-2">
              <h3 className="text-lg font-bold text-primary-color text-center mb-1">Nome</h3>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg text-primary-color font-bold focus:border-primary-color focus:outline-none"
              />
            </label>
            <label className="block mb-2">
              <h3 className="text-lg font-bold text-primary-color text-center mb-1">Descrição</h3>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-lg text-primary-color font-bold focus:border-primary-color focus:outline-none"
              />
            </label>
            <div className="flex gap-4 mb-4">
              <label className="flex-1">
                <h3 className="text-lg font-bold text-primary-color text-center mb-1">Preço</h3>
                <input 
                  type="number" 
                  name="price" 
                  value={formData.price} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-2 border border-gray-300 rounded-lg text-primary-color font-bold focus:border-primary-color focus:outline-none"
                />
              </label>
              <label className="flex-1">
                <h3 className="text-lg font-bold text-primary-color text-center mb-1">Tag</h3>
                <select 
                  name="tag" 
                  value={formData.tag} 
                  onChange={handleChange} 
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg text-primary-color font-bold focus:border-primary-color focus:outline-none"
                >
                  {tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex-1">
                <h3 className="text-lg font-bold text-primary-color text-center mb-1">Status</h3>
                <select 
                  name="status" 
                  value={formData.status} 
                  onChange={handleChange} 
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg text-primary-color font-bold focus:border-primary-color focus:outline-none"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button type="button" className="bg-red-600 text-white border-none p-3 rounded-lg cursor-pointer text-lg font-bold transition-transform duration-300 ease-in-out hover:scale-105" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="bg-green-600 text-white border-none p-3 rounded-lg cursor-pointer text-lg font-bold transition-transform duration-300 ease-in-out hover:scale-105">
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModalAdmin;