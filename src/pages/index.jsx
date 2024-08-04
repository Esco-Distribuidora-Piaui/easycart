import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import api from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { exampleProduct } from "./produtos/exemplos";
import ProductCardAdmin from "../components/ProductCardAdmin";

const Home = () => {
  const [products, setProducts] = useState([exampleProduct]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="flex-grow"
        style={{ backgroundColor: "var(--page-bg-color)" }}
      >
        <div className="p-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCardAdmin key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
