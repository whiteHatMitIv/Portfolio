import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
// import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import MainContentStyled from "./styles/MainContentStyles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <div className="light-dark-mode">
            <div className="left-content">

            </div>
            <div className="right-content">
              
            </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolios" element={<PortfolioPage />} />
          {/* <Route path="/blogs" element={<BlogPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

export default App;
