const Navbar = ({ products }) => {
  let num = 0;
  products.forEach((c) => {
    num += parseInt(c.quantity);
  });
  return (
    <div className="h-12 flex justify-center items-center gap-x-4 bg-slate-700 p-1 mb-8">
      <h1 className="text-xl font-bold text-slate-300">
        Inventory App (ReactJs & Tailwind)
      </h1>
      <span
        className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-slate-300 font-bold bg-slate-500 text-slate-300"
        id="all-quantity-value"
      >
        {num}
      </span>
    </div>
  );
};

export default Navbar;
