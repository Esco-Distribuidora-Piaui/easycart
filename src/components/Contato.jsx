import React from 'react';

const Contato = () => {
  return (
    <section id="contato" className="py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto à Esquerda */}
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">Ficou interessado?</h2>
          <p className="text-lg">
            Entre em contato conosco preenchendo o formulário ao lado ou pelas nossas redes sociais.
          </p>
        </div>

        {/* Formulário à Direita */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
                placeholder="Seu nome"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
                placeholder="Seu email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
                placeholder="Sua mensagem"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
