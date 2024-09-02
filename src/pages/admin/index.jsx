import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisplayAdmin from "@/components/DisplayAdmin";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <DisplayAdmin />
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
