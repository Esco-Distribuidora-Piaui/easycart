import React, { useState } from 'react';
import styles from '../styles/FilterSidebar.module.css';

const FilterSidebar = ({ onFilterChange }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ["Papel", "Capa para encadernação", "Polaseal"]; 

  const handleTagClick = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onFilterChange(newTags);
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Filtros:</h2>
        <ul className={styles.tagList}>
          {tags.map(tag => (
            <li
              key={tag}
              className={selectedTags.includes(tag) ? styles.selected : ''}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </aside>
      <div className={styles.separator}></div>
    </div>
  );
};

export default FilterSidebar;
