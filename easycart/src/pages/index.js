import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.get('/products');
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <main>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
