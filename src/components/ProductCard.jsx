import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => (
  <div className={styles.productCard}>
    <div className={styles.imageWrapper}>
      <Image src={product.image} alt={product.name} 
          width={100}
          height={100} 
          layout="responsive"/>
      <div className={styles.cartIcon}>
        <Image 
          src="/icons/cart.svg" 
          alt="Adicionar ao Carrinho" 
          width={30} 
          height={30} 
        />
      </div>
    </div>
    <div className={styles.productInfo}>
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.productPrice}>{product.price}</p>
      <p className={styles.productStatus}>{product.status}</p>
    </div>
  </div>
);

export default ProductCard;
