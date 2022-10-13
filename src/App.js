import { useState } from "react";
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="container max-w-screen-sm mx-auto">
        <Category setCategories={setCategories} />
        <Product categories={categories} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;
