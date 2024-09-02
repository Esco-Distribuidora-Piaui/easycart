import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import ProductCardAdmin from "@/components/ProductCardAdmin";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { exampleProducts } from "../../../produtos/exemplos";
import ProductRegisterModal from "@/components/ProductRegisterModal";
import SortBy from "@/components/SortBy";

const Home = () => {
  const [products, setProducts] = useState(exampleProducts);
  const [originalProducts, setOriginalProducts] = useState(exampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(exampleProducts);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
        setOriginalProducts(response.data);
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

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleSaveProduct = (newProduct) => {
    // lógica para salvar o produto
    setProducts([...products, newProduct]);
    setFilteredProducts([...filteredProducts, newProduct]);
    handleCloseRegisterModal();
  };

  const handleSortChange = (sortOption) => {
    let sortedProducts = [...filteredProducts];
    switch (sortOption) {
      case "price-asc":
        sortedProducts.sort((a, b) => parseFloat(a.price.replace('R$ ', '').replace(',', '.')) - parseFloat(b.price.replace('R$ ', '').replace(',', '.')));
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => parseFloat(b.price.replace('R$ ', '').replace(',', '.')) - parseFloat(a.price.replace('R$ ', '').replace(',', '.')));
        break;
      case "name-asc":
        sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "name-desc":
        sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
        case "":
          sortedProducts = [...originalProducts];
          break;
      default:
        sortedProducts = [...filteredProducts];
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="flex">
          <FilterSidebar onFilterChange={handleFilterChange} />
          <div className="p-4 flex-grow">
              <h2 className="titulo">Gerenciar Produtos</h2>
              <div className="flex justify-evenly items-center mb-4">
                <button 
                  type="button" 
                  className="register" 
                  onClick={handleOpenRegisterModal}
                >
                  Cadastrar Produto
                </button>
                <SortBy onSortChange={handleSortChange} />
              </div>
              
            <div className="productContainerAdmin">
              {filteredProducts.map((product) => (
                <ProductCardAdmin key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>{" "}
      </main>
      <Footer />
      {isRegisterModalOpen && (
        <ProductRegisterModal 
          onClose={handleCloseRegisterModal} 
          onSave={handleSaveProduct}
        />
      )}
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
