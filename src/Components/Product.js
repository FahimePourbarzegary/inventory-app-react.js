import { useState } from "react";

const Product = ({ categories, setProducts }) => {
  const [productData, setProductData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const onChangeHandler = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const addNewProduct = (e) => {
    e.preventDefault();
    if (
      productData.quantity < 0 ||
      !productData.title ||
      !productData.categoryId
    )
      return "";
    setProducts((prevState) => [
      ...prevState,
      {
        ...productData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setProductData({ ...productData, title: "", quantity: 0 });
  };
  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            Product title
          </label>
          <input
            type="text"
            name="title"
            onChange={onChangeHandler}
            value={productData.title}
            id="product-title"
            placeholder="title..."
            className="bg-transparent text-slate-400 rounded-xl border border-slate-500"
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={onChangeHandler}
            id="product-quantity"
            className="bg-transparent text-slate-400 rounded-xl border border-slate-500"
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            Category
          </label>
          <select
            name="categoryId"
            onChange={onChangeHandler}
            value={productData.categories}
            defaultValue={productData.categories}
            id="product-category"
            className="bg-transparent text-slate-400 rounded-xl w-full"
          >
            <option className="bg-slate-500 text-slate-400" value="">
              Select a Category
            </option>
            {categories.map((c) => {
              return (
                <option
                  className="bg-slate-500 text-slate-400"
                  key={c.id}
                  value={c.id}
                >
                  {c.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <button
            id="add-new-product"
            onClick={addNewProduct}
            className="flex-1 text-slate-200 bg-slate-500 rounded-xl py-2"
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
