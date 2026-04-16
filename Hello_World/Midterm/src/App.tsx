import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Selection from "./pages/Selection";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

export default App;
