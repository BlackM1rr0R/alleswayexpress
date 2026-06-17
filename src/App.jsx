import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import NachhaltigkeitPage from "./pages/NachhaltigkeitPage";
import FlottePage from "./pages/FlottePage";
import FAQPage from "./pages/FAQPage";
import KarrierePage from "./pages/KarrierePage";
import TrackingPage from "./pages/TrackingPage";
import "./styles/global.css";

function App() {
  const [currentPage, setCurrentPage] = useState(() => localStorage.getItem("allesway_page") || "home");
  const [lang, setLang] = useState(() => localStorage.getItem("allesway_lang") || "de");
  const [trackQuery, setTrackQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("allesway_page", currentPage);
  }, [currentPage]);

  const handleSetLang = (code) => {
    setLang(code);
    localStorage.setItem("allesway_lang", code);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "services":       return <ServicesPage       setPage={setCurrentPage} lang={lang} />;
      case "about":          return <AboutPage          setPage={setCurrentPage} lang={lang} />;
      case "contact":        return <ContactPage        setPage={setCurrentPage} lang={lang} />;
      case "gallery":        return <GalleryPage        setPage={setCurrentPage} lang={lang} />;
      case "nachhaltigkeit": return <NachhaltigkeitPage setPage={setCurrentPage} lang={lang} />;
      case "flotte":         return <FlottePage         setPage={setCurrentPage} lang={lang} />;
      case "faq":            return <FAQPage            setPage={setCurrentPage} lang={lang} />;
      case "karriere":       return <KarrierePage       setPage={setCurrentPage} lang={lang} />;
      case "tracking":       return <TrackingPage       setPage={setCurrentPage} lang={lang} trackQuery={trackQuery} clearTrackQuery={() => setTrackQuery("")} />;
      default:               return <HomePage           setPage={setCurrentPage} lang={lang} setTrackQuery={setTrackQuery} />;
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
