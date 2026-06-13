import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CargoPage from "./pages/CargoPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./styles/global.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState(() => localStorage.getItem("allesway_lang") || "de");

  const handleSetLang = (code) => {
    setLang(code);
    localStorage.setItem("allesway_lang", code);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "services": return <ServicesPage setPage={setCurrentPage} lang={lang} />;
      case "cargo":    return <CargoPage    setPage={setCurrentPage} lang={lang} />;
      case "about":    return <AboutPage    setPage={setCurrentPage} lang={lang} />;
      case "contact":  return <ContactPage  setPage={setCurrentPage} lang={lang} />;
      default:         return <HomePage     setPage={setCurrentPage} lang={lang} />;
    }
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header currentPage={currentPage} setPage={setCurrentPage} lang={lang} setLang={handleSetLang} />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer setPage={setCurrentPage} lang={lang} />
      <ScrollToTop />
    </div>
  );
}

export default App;
