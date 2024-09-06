import { useState } from "react";
import { exampleProducts } from "../../produtos/exemplos";

const ProductRegisterModal = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      price: '',
      tag: '',
      status: 'Disponível',
      image: null,
    });

    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'image') {
        setFormData({
          ...formData,
          image: files[0],
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
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
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50" onClick={onClose}>
        <div className="bg-white rounded-lg max-w-md w-11/12 max-h-[90vh] flex flex-col relative overflow-hidden text-blue-600" onClick={(e) => e.stopPropagation()}>
          <button className="absolute text-xl top-2 right-4 border-none bg-transparent text-primary-color font-bold cursor-pointer transition-transform transform hover:scale-110" onClick={onClose}>x</button>
          <div className="p-4 text-center bg-gray-100 border-b border-blue-600 font-bold text-xl">
            <h2>Cadastrar Produto</h2>
          </div>
          <form className="flex-1 flex flex-col overflow-hidden text-center" onSubmit={handleSubmit}>
            <div className="flex-1 p-4 overflow-y-auto">
              <label className="block mb-4">
                <h3 className="text-primary-color font-bold text-lg text-center mb-2">Imagem</h3>
                <input 
                  type="file" 
                  name="image" 
                  accept="image/*" 
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 text-primary-color"
                />
              </label>
              <label className="block mb-4">
                <h3 className="text-primary-color font-bold text-lg text-center mb-2">Nome</h3>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-gray-300 rounded-md p-2 text-primary-color"
                />
              </label>
              <label className="block mb-4">
                <h3 className="text-primary-color font-bold text-lg text-center mb-2">Descrição</h3>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-gray-300 rounded-md p-2 text-primary-color"
                />
              </label>
              <div className="flex gap-4 mb-4">
                <label className="flex-1">
                  <h3 className="text-primary-color font-bold text-lg mb-2">Preço</h3>
                  <input 
                    type="number" 
                    name="price" 
                    value={formData.price} 
                    onChange={handleChange} 
                    required 
                    className="w-full border border-gray-300 rounded-md p-2 text-primary-color"
                  />
                </label>
                <label className="flex-1">
                  <h3 className="text-primary-color font-bold text-lg mb-2">Tag</h3>
                  <select 
                    name="tag" 
                    value={formData.tag} 
                    onChange={handleChange}  
                    required
                    className="w-full border border-gray-300 rounded-md p-2 text-primary-color"
                  >
                    {tags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex-1">
                  <h3 className="text-primary-color font-bold text-lg mb-2">Status</h3>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange} 
                    required
                    className="w-full border border-gray-300 rounded-md p-2 text-primary-color"
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
                <button type="submit" className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-base transition-transform transform hover:scale-105">Cadastrar</button>
                <button type="button" className="bg-blue-600 text-white border-none py-2 px-4 rounded-md cursor-pointer text-base transition-transform transform hover:scale-105" onClick={onClose}>Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
export default ProductRegisterModal;