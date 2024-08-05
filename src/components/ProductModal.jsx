import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductModal.module.css';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>x</button>
        <div className={styles.modalHeader}>
          <h1>Detalhes do Produto</h1>
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
            <h2>{product.name}</h2>
            <h3>Descrição</h3>
            <h4>{product.description}</h4>
            <div className={styles.cart}>
              <div>
                <p><strong>Preço:</strong> {product.price}</p>
                <p><strong>Status:</strong> {product.status}</p>
              </div>
              <button className={styles.addToCartButton}>
                  <Image 
                  src="/icons/cart.svg" 
                  alt="Adicionar ao Carrinho" 
                  width={30} 
                  height={30} 
                />
                Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;