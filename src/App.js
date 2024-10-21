import HomePage from "./pages/HomePage/HomePage";
import BlogsPage from "./pages/BlogsPage";
import BestPlacesPage from "./pages/BestPlacesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OneBlogPage from "./pages/OneBlogPage/OneBlogPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/blogs/:id" element={<OneBlogPage />} />
        <Route exact path="/bestplaces" element={<BestPlacesPage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
