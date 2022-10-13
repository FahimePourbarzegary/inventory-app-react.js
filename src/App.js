
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container max-w-screen-sm mx-auto">
        <Category />
      </div>
    </div>
  );
}

export default App;
