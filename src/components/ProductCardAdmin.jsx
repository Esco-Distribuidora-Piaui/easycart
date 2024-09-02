import React, { useState } from 'react';
import Image from 'next/image';
import ProductModal from './ProductModal';
import styles from '../styles/ProductCardAdmin.module.css';
import ProductModalAdmin from './ProductModalAdmin';

const ProductCardAdmin = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedProduct) => {
    // Adicionar lógica para salvar as alterações
    console.log('Produto atualizado:', updatedProduct);
    handleClose();
  };

  return (
    <>
      <div className={styles.productCardAdmin}>
        <div className={styles.productCardImage}>
          <Image 
            src={product.image} 
            alt={product.name} 
            width={300}
            height={300} 
            layout="responsive" 
          />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.productCardDetails}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.status}</p>
        </div>
        <div className={styles.editIcon} onClick={handleEditClick}>
          <Image
            src="/icons/edit.svg"
            alt="Editar Produto"
            width={30}
            height={30}
          />
        </div>
      </div>
      {isModalOpen && (
        <ProductModalAdmin
          product={product}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default ProductCardAdmin;