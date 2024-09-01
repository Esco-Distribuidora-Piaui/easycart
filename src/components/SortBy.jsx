import { useState } from "react";
import styles from "../styles/SortBy.module.css";

const SortBy = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    onSortChange(selected);
  };

  return (
    <div className={styles.sortByContainer}>
      <label htmlFor="sort-options" className={styles.label}>
        Ordenar por:
      </label>
      <select
        id="sort-options"
        value={selectedOption}
        onChange={handleSortChange}
        className={styles.select}
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