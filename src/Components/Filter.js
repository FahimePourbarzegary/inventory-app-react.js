const Filter = ({
  onSort,
  onSearch,
  searchValue,
  sort,
  categories,
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <label
          htmlFor="search-input"
          className="text-slate-400 text-3xl font-bold"
        >
          Search
        </label>
        <input
          type="text"
          name="search-input"
          onChange={onSearch}
          value={searchValue}
          id="search-input"
          className="bg-transparent text-slate-400 rounded-xl border border-slate-500"
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <label
          htmlFor="sort-products"
          className="text-slate-400 text-3xl font-bold"
        >
          Sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          onChange={onSort}
          value={sort}
        >
          <option className="bg-slate-500 text-slate-400" value="newest">
            newest
          </option>
          <option className="bg-slate-500 text-slate-400" value="oldest">
            oldest
          </option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-6">
        <label
          htmlFor="select-category"
          className="text-slate-400 text-3xl font-bold"
        >
          Category
        </label>
        <select
          name="select-category"
          id="select-category"
          className="bg-transparent text-slate-400 rounded-xl"
          onChange={onSelectCategory}
          value={selectedCategory}
        >
          <option className="bg-slate-500 text-slate-400" value="">
            All
          </option>
          {categories.map((c) => {
            return (
              <option
                className="bg-slate-500 text-slate-400"
                value={c.id}
                key={c.id}
              >
                {c.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
