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
      <div className="relative bg-white text-blue-600 rounded-xl shadow-xl max-w-4xl w-full max-h-[90%] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button className="absolute text-2xl top-2 right-4 text-blue-600 font-bold cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110" onClick={onClose}>
          &times;
        </button>
        <div className="p-4 bg-gray-50 border-b border-blue-600 text-2xl font-semibold text-center text-blue-600">
          Editar Produto
        </div>
        <form className="flex flex-1 overflow-hidden" onSubmit={handleSubmit}>
          <div className="flex-none w-1/2 flex justify-center items-center p-4 border-r border-gray-300">
            <div className="w-full max-w-xs">
              <Image 
                src={formData.image} 
                alt={formData.name} 
                width={300}
                height={300}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 p-6 overflow-y-auto text-center">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-lg font-bold text-blue-600">Nome</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-color focus:border-primary-color"
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-blue-600">Descrição</label>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  required 
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-color focus:border-primary-color"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-lg font-bold text-blue-600">Preço</label>
                  <input 
                    type="number" 
                    name="price" 
                    value={formData.price} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-color focus:border-primary-color"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-blue-600">Tag</label>
                  <select 
                    name="tag" 
                    value={formData.tag} 
                    onChange={handleChange} 
                    required
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-color focus:border-primary-color"
                  >
                    {tags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-bold text-blue-600">Status</label>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange} 
                    required
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-color focus:border-primary-color"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button type="button" className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-transform duration-200 ease-in-out transform hover:scale-105" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-transform duration-200 ease-in-out transform hover:scale-105">
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