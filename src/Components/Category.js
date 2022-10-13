const Category = () => {
    
    return (
      <>
        <div className="mb-6 hidden" id="category-wrapper">
          <h2 className="text-xl text-slate-300 font-bold">Add New Category</h2>
          <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
            <div>
              <label htmlFor="category-title" className="block mb-1 text-slate-400">
                title
              </label>
              <input
                type="text"
                name="category-title"
                id="category-title"
                placeholder="title..."
                className="bg-transparent text-slate-400 rounded-xl border border-slate-500"
              />
            </div>
            <div>
              <label
                htmlFor="category-description"
                className="block mb-1 text-slate-400"
              >
                description
              </label>
              <textarea
                type="text"
                name="category-description"
                id="category-description"
                className="bg-transparent text-slate-400 rounded-xl border border-slate-500 w-full"
              ></textarea>
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <button
                className="flex-1 text-slate-400 border border-slate-400 rounded-xl py-2"
                id="cancel-categoryBtn"
              >
                Cancel
              </button>
              <button
                id="add-new-category"
                className="flex-1 text-slate-200 bg-slate-500 rounded-xl py-2"
              >
                Add New Category
              </button>
            </div>
          </form>
        </div>
        <h2
          className="text-xl mb-8 text-slate-500 font-bold cursor-pointer transition-all duration-300 hover:text-slate-300"
          id="toggle-add-category"
        >
          Add New Category
        </h2>
      </>
    );
}
 
export default Category;