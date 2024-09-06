import React, { useState } from 'react';
import { exampleProducts } from "../../produtos/exemplos";

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = [...new Set(exampleProducts.map(product => product.tag))];

  const handleTagClick = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onFilterChange(newTags);
  };

  return (
    <div className="flex">
      <aside className="min-w-[200px] p-5 font-bold flex flex-col overflow-y-auto max-h-[80vh] mt-5">
        <h2 className="mb-5 text-xl text-left text-blue-600">Filtros:</h2>
        <ul className="list-none p-0 w-full">
          {tags.map(tag => (
            <li
              key={tag}
              className={`p-2.5 cursor-pointer w-full max-w-[150px] overflow-hidden text-ellipsis rounded transition-colors duration-300 text-center mb-2.5 ${
                selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:text-blue-600'
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </aside>
      <div className="h-[90%] border-r border-gray-300 mt-7"></div>
    </div>
  );
};

export default FilterSidebar;
