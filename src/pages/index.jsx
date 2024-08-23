import Sobre from "@/components/Sobre";
import Footer from "../components/Footer";
import HeaderLandingPage from "@/components/HeaderLandingPage";
import Parceiros from "@/components/Parceiros";
import Contato from "@/components/Contato";

const Home = () => {
  // const [products, setProducts] = useState(exampleProducts);
  // const [filteredProducts, setFilteredProducts] = useState(exampleProducts);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await api.get("/products");
  //       setProducts(response.data);
  //       setFilteredProducts(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // const handleFilterChange = (selectedTags) => {
  //   const newFilteredProducts = products.filter(product =>
  //     selectedTags.every(tag => product.tag.includes(tag))
  //   );
  //   setFilteredProducts(newFilteredProducts);
  // };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderLandingPage />
      <main className="flex-grow" >
        <Sobre/>
        <Parceiros/>
        <Contato/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;


{/* <div className="flex">
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
        </div> */}