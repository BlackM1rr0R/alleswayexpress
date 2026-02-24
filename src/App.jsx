import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CargoPage from "./pages/CargoPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./styles/global.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "services":
        return <ServicesPage setPage={setCurrentPage} />;
      case "cargo":
        return <CargoPage setPage={setCurrentPage} />;
      case "about":
        return <AboutPage setPage={setCurrentPage} />;
      case "contact":
        return <ContactPage setPage={setCurrentPage} />;
      default:
        return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
}

export default App;
