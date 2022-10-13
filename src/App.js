
import { useState } from "react";
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";


function App() {
    const [categories, setCategories] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="container max-w-screen-sm mx-auto">
        <Category setCategories={setCategories} />
      </div>
    </div>
  );
}

export default App;
