import Home from "./views/home/home.js";
import About from "./views/about/about.js";
import Blogs from "./views/blogs/blogs.js";
import BestPlace from "./views/bestplaces/bestplace.js";
import Quicklinks from "./views/quicklinks/quicklinks.js";

function App() {
  return (
    <div>
      <Home />
      <Blogs />
      <BestPlace />
      <About />
      <Quicklinks />
    </div>
  );
}

export default App;
