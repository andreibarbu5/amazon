import Add from "./components/Add";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Add */}
      <Add />
      {/* Hero */}
      <Hero />
      {/* Products */}
      <Products />
      {/* Deals */}
      <Deals />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
