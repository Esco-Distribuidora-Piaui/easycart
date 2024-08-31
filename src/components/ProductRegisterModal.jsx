import { useState } from "react";
import styles from '../styles/ProductRegisterModal.module.css';

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
      { value: 'Fora de Estoque', label: 'Fora de Estoque' },
    ];
  
    const tags = ["Papel", "Capa para encadernação", "Polaseal"];
  
    return (
      <div className={styles.modalBackdrop} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>x</button>
          <div className={styles.modalHeader}>
            <h2>Cadastrar Produto</h2>
          </div>
          <form className={styles.modalBody} onSubmit={handleSubmit}>
            <div className={styles.modalDetails}>
            <label>
                <h3>Imagem</h3>
                <input 
                  type="file" 
                  name="image" 
                  accept="image/*" 
                  onChange={handleChange}
                />
              </label>
              <label>
                <h3>Nome</h3>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </label>
              <label>
                <h3>Descrição</h3>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  required 
                />
              </label>
              <div className={styles.priceAndStatus}>
                <label>
                  <h3>Preço</h3>
                  <input 
                    type="number" 
                    name="price" 
                    value={formData.price} 
                    onChange={handleChange} 
                    required 
                  />
                </label>
                <label>
                  <h3>Tag</h3>
                  <select 
                    name="tag" 
                    value={formData.tag} 
                    onChange={handleChange} 
                    required
                  >
                    {tags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <h3>Status</h3>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange} 
                    required
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className={styles.actions}>
                <button type="submit" className={styles.saveButton}>Cadastrar</button>
                <button type="button" className={styles.cancelButton} onClick={onClose}>Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ProductRegisterModal;