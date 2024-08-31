import { useRouter } from 'next/router';
import { useState } from 'react';
import api from '../src/services/api';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/products', { name, price });
      router.push('/');
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            required
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product Price"
            required
          />
          <button type="submit">Add Product</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CreateProduct;
