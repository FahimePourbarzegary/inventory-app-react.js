import { useState } from "react";

const Category = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryData, setCategoryData] = useState({
    title: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };
  const addNewCategory = (e) => {
    e.preventDefault();
    if (!categoryData.description || !categoryData.title) return "";
    setCategories((prevState) => [
      ...prevState,
      {
        ...categoryData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setCategoryData({ title: "", description: "" });
  };
  const cancelBtnHandler = (e) => {
    e.preventDefault();
    setIsShow((prevState) => !prevState);
    setCategoryData({ title: "", description: "" });
  };
  return (
    <>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold">Add New Category</h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 text-slate-400">
              title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              value={categoryData.title}
              onChange={(e) => onChangeHandler(e)}
              placeholder="title..."
              className="bg-transparent text-slate-400 rounded-xl border border-slate-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 text-slate-400">
              description
            </label>
            <textarea
              type="text"
              name="description"
              value={categoryData.description}
              onChange={onChangeHandler}
              id="category-description"
              className="bg-transparent text-slate-400 rounded-xl border border-slate-500 w-full"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <button
              className="flex-1 text-slate-400 border border-slate-400 rounded-xl py-2"
              id="cancel-categoryBtn"
              onClick={cancelBtnHandler}
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              onClick={addNewCategory}
              className="flex-1 text-slate-200 bg-slate-500 rounded-xl py-2"
            >
              Add New Category
            </button>
          </div>
        </form>
      </div>
      <button
        className={`text-xl mb-8 text-slate-500 font-bold cursor-pointer transition-all duration-300 hover:text-slate-300 ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prevState) => !prevState)}
        id="toggle-add-category"
      >
        Add New Category?
      </button>
    </>
  );
};

export default Category;
