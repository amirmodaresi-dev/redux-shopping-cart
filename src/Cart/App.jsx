import Navbar from "../components/Navbar";
import CartPage from "../components/CartPage";
import Footer from "../components/Footer";
import Home from "../components/Home";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppCart() {
  return (
    <BrowserRouter>
      <div dir="rtl" className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
