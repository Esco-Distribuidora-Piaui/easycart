import Sobre from "@/components/Sobre";
import Footer from "../components/Footer";
import HeaderLandingPage from "@/components/HeaderLandingPage";
import Parceiros from "@/components/Parceiros";
import Contato from "@/components/Contato";

const Home = () => {

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
