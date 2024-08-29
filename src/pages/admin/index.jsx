import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import ProductCardAdmin from "@/components/ProductCardAdmin";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { exampleProducts } from "../produtos/exemplos";

const Home = () => {
  const [products, setProducts] = useState(exampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(exampleProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (selectedTags) => {
    const newFilteredProducts = products.filter((product) =>
      selectedTags.every((tag) => product.tag.includes(tag))
    );
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="flex">
          <FilterSidebar onFilterChange={handleFilterChange} />
          <div className="p-4 flex-grow">
            <div className="productContainerAdmin">
              {filteredProducts.map((product) => (
                <ProductCardAdmin key={product.id} product={product} />
              ))}
              {filteredProducts.map((product) => (
                <ProductCardAdmin key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>{" "}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

{
  /* <div className="flex">
          <FilterSidebar onFilterChange={handleFilterChange} />
          <div className="p-4 flex-grow">
            <div className="productContainer">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div> */
}
