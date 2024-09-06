import { useState } from "react";

const SortBy = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    onSortChange(selected);
  };

  return (
    <div className="flex items-center gap-2 mr-8 mt-2"> {/* Container principal para alinhar o label e select */}
      <label htmlFor="sort-options" className="text-base text-gray-800"> {/* Label para o select */}
        Ordenar por:
      </label>
      
      {/* Estilização do select: largura, padding, cor de fundo, borda e transições */}
      <select
        id="sort-options"
        value={selectedOption}
        onChange={handleSortChange}
        className="w-[200px] p-2 text-base border border-gray-300 rounded bg-white transition-colors cursor-pointer hover:border-gray-500 focus:border-blue-600 focus:outline-none"
      >
        <option value="">Mais relevantes</option>
        <option value="price-asc">Preço: menor para maior</option>
        <option value="price-desc">Preço: maior para menor</option>
        <option value="name-asc">Nome: A-Z</option>
        <option value="name-desc">Nome: Z-A</option>
      </select>
    </div>
  );
};

export default SortBy;