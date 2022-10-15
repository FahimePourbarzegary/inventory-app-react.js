const Edit = ({
  selectedProduct,
  setSelectedProduct,
  categories,
  setProducts,
  products,
}) => {
  const onChangeHandler = (e) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
  };
  const editProduct = (e) => {
    e.preventDefault();
    if (
      selectedProduct.quantity < 0 ||
      !selectedProduct.title ||
      !selectedProduct.categoryId
    )
      return "";
    const index = products.findIndex((p) => p.id === selectedProduct.id);
    const cloneProducts = [...products];
    cloneProducts[index] = selectedProduct;
    setProducts(cloneProducts);
    setSelectedProduct(null);
  };
  return (
    <div className="mb-6" id="product-edit-wrapper">
      <h2 className="text-xl text-slate-300 font-bold">Edit Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label
            htmlFor="product-title-edit"
            className="block mb-1 text-slate-400"
          >
            Product title
          </label>
          <input
            type="text"
            name="title"
            id="product-title-edit"
            value={selectedProduct.title}
            onChange={onChangeHandler}
            className="bg-transparent text-slate-400 rounded-xl border border-slate-500"
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity-edit"
            className="block mb-1 text-slate-400"
          >
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="product-quantity-edit"
            value={selectedProduct.quantity}
            onChange={onChangeHandler}
            className="bg-transparent text-slate-400 rounded-xl border border-slate-500"
          />
        </div>
        <div>
          <label
            htmlFor="product-category-edit"
            className="block mb-1 text-slate-400"
          >
            Category
          </label>
          <select
            name="categoryId"
            id="product-category-edit"
            defaultValue={selectedProduct.categoryId}
            onChange={onChangeHandler}
            className="bg-transparent text-slate-400 rounded-xl w-full"
          >
            <option
              className="bg-slate-500 text-slate-400"
              value="selectCategory"
            >
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
            id="edit-product"
            onClick={editProduct}
            className="flex-1 text-slate-200 bg-slate-500 rounded-xl py-2"
          >
            Edit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
