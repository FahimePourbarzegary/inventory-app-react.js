const ProductList = ({ products, categories, setProducts }) => {
  const findCategory = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };
  const deleteProduct = (productId) => {
    const filteredProduct = products.filter(
      (p) => p.id !== parseInt(productId)
    );
    setProducts(filteredProduct);
  };
  return (
    <div>
      <h2>Product List</h2>
      <div className=" overflow-x-auto">
        {products.map((product) => {
          return (
            <div
              className="flex items-center justify-between mb-8"
              key={product.id}
            >
              <span className="text-slate-400">{product.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-slate-400">
                  {new Date().toLocaleDateString("en-US")}
                </span>
                <span className="block px-3 py-0.5 text-slate-400 rounded-2xl text-sm border border-slate-400">
                  {findCategory(product.categoryId)}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-slate-300 bg-slate-500 text-slate-300">
                  {product.quantity}
                </span>
                <button
                  className="delete-product border px-2 py-0.5 rounded-2xl border-red-500 text-red-500"
                  onClick={() => deleteProduct(product.id)}
                  data-product-id={product.id}
                >
                  delete
                </button>
                <button
                  className="edit-product border px-2 py-0.5 rounded-2xl border-green-500 text-green-500"
                  data-product-id={product.id}
                >
                  edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
