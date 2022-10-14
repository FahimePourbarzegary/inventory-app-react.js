import { useState } from "react";
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="container max-w-screen-sm mx-auto">
        <Category setCategories={setCategories} />
        <Product categories={categories} setProducts={setProducts} />
        <ProductList
          products={products}
          categories={categories}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
