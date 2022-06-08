import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Menubar from "./components/Menubar/Menubar";
import ProductList from "./components/ProductList/ProductList";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Menubar />
      <Banner />
      <Products />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
