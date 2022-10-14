import { useEffect, useState } from "react";
import Category from "./Components/Category";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("newest");
  const [searchValue, setSearchValue] = useState([]);
  useEffect(() => {
    let result = products;
    result = filterSearch(result);
    result = sortData(result);
    setFilteredProducts(result);
    console.log(filteredProducts);
  }, [products, sort, searchValue]);
  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };
  const filterSearch = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };
  const sortData = (array) => {
    let savedProducts = [...array];
    return savedProducts.sort((a, b) => {
      if (sort === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "oldest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container max-w-screen-sm mx-auto">
        <Category setCategories={setCategories} />
        <Product categories={categories} setProducts={setProducts} />
        <Filter
          onSort={sortHandler}
          onSearch={searchHandler}
          sort={sort}
          searchValue={searchValue}
        />
        <ProductList
          products={filteredProducts}
          categories={categories}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
