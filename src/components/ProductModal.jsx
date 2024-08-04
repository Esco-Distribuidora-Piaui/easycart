import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductModal.module.css';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>x</button>
        <div className={styles.modalHeader}>
          <h2>{product.name}</h2>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalImage}>
            <Image 
              src={product.image} 
              alt={product.name} 
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className={styles.modalDetails}>
            <h3>Descrição</h3>
            <h4>{product.description}</h4>
            <p><strong>Preço:</strong> {product.price}</p>
            <p><strong>Status:</strong> {product.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;