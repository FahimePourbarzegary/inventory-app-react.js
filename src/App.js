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
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    let result = [...products];
    result = filterSearch(result);
    result = filterCategory(result);
    result = sortData(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);
  useEffect(() => {
    const storedProductsData =
      JSON.parse(localStorage.getItem("products")) || [];
    const storedCategoriesData =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(storedProductsData);
    setCategories(storedCategoriesData);
  }, []);
  useEffect(() => {
    if (products.length)
      localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    if (categories.length)
      localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
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
      } else return -1;
    });
  };
  const deleteProduct = (productId) => {
    const filteredProduct = products.filter(
      (p) => p.id !== parseInt(productId)
    );
    setProducts(filteredProduct);
  };
  const selectedCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filterCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((p) => p.categoryId === selectedCategory);
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
          categories={categories}
          onSelectCategory={selectedCategoryHandler}
          selectedCategory={selectedCategory}
        />
        <ProductList
          products={filteredProducts}
          categories={categories}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
}

export default App;
