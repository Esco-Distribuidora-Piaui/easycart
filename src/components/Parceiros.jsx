import React from "react";
import { useRouter } from "next/router";

const Parceiros = () => {
  const router = useRouter();

  const parceiros = [
    { nome: "Loja Modelo", categoria: "Teste", path: "/cliente/" },
    { nome: "Loja 2", categoria: "Artesanato" },
    { nome: "Loja 3", categoria: "Serviços" },
    { nome: "Loja 4", categoria: "Camping" },
    { nome: "Loja 5", categoria: "Moda" },
    { nome: "Loja 6", categoria: "Eletrônicos" },
    // Adicione mais parceiros conforme necessário
  ];

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <section id="parcerias" className="py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Nossos Parceiros</h2>
        <div className="flex overflow-x-auto space-x-4 p-4 justify-start min-w-full pl-8">
          {parceiros.map((parceiro, index) => (
            <div
              key={index}
              className="min-w-[200px] max-w-[200px] border rounded-lg shadow-md p-4 flex flex-col items-center"
              onClick={() => handleCardClick(parceiro.path)}
            >
              <div className="bg-gray-200 w-full h-32 mb-4 rounded-lg flex items-center justify-center">
                {/* Aqui você pode colocar a imagem do parceiro */}
                <img
                  src="/placeholder-image.svg"
                  alt={parceiro.nome}
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-semibold">{parceiro.nome}</h3>
              <p className="text-gray-600">{parceiro.categoria}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
