import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductCardAdmin.module.css';

const ProductCardAdmin = ({ product }) => {
  const { name, price, description, image, status, id } = product;

  return (
    <div className={styles.productCardAdmin}>
      <div className={styles.productCardImage}>
        <Image 
          src={image} 
          alt={name} 
          width={300}
          height={300} 
          layout="responsive" 
        />
      </div>
      <div className={styles.productCardDetails}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={styles.info}>
            <p>{price}</p>
            <p>{status}</p>
        </div>
      </div>
      <div className={styles.editIcon}>
        <Image
          src="/icons/edit.svg"
          alt="Editar Produto"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default ProductCardAdmin;