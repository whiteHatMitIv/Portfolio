import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
// import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import MainContentStyled from "./styles/MainContentStyles";
import { Routes, Route } from "react-router-dom";
import darkModeIcon from "./images/asset/dark_mode.svg";
import lightModeIcon from "./images/asset/light_mode.svg";
import { DarkModeContext } from "./DarkModeContext";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <GlobalStyle darkMode={darkMode} />
      <Sidebar />
      <MainContentStyled darkMode={darkMode}>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <button className="light-dark-mode" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          <img src={darkMode ? lightModeIcon : darkModeIcon} alt="mode icon" />
        </button>

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
