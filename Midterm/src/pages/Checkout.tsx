import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  const inputClass =
    "w-full bg-transparent border border-border px-3 py-2 data-text text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors";

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-6">
          <section className="text-center flex flex-col gap-4">
            <span className="data-text text-foreground text-sm">order_confirmed ✓</span>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-6">
          <span className="data-text-secondary">no_items_to_checkout</span>
          <button
            onClick={() => navigate("/")}
            className="data-text text-muted-foreground hover:text-foreground transition-colors mt-4"
          >
            ← back_to_feed
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col gap-8"
        >
          <div>
            <span className="data-text text-foreground text-sm block">checkout_</span>
            <span className="data-text-secondary mt-1 block">{items.length}_items // ${totalPrice}</span>
          </div>

          {/* Shipping */}
          <section className="flex flex-col gap-3">
            <span className="data-text-secondary">shipping_address</span>
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="first_name" value={form.firstName} onChange={update("firstName")} required className={inputClass} />
              <input placeholder="last_name" value={form.lastName} onChange={update("lastName")} required className={inputClass} />
            </div>
            <input placeholder="address_" value={form.address} onChange={update("address")} required className={inputClass} />
            <div className="grid grid-cols-3 gap-3">
              <input placeholder="city_" value={form.city} onChange={update("city")} required className={inputClass} />
              <input placeholder="state_" value={form.state} onChange={update("state")} required className={inputClass} />
              <input placeholder="zip_" value={form.zip} onChange={update("zip")} required className={inputClass} />
            </div>
            <input placeholder="country_" value={form.country} onChange={update("country")} required className={inputClass} />
          </section>

          {/* Billing */}
          <section className="flex flex-col gap-3">
            <span className="data-text-secondary">billing_info</span>
            <input placeholder="card_number" value={form.cardNumber} onChange={update("cardNumber")} required className={inputClass} />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="mm/yy" value={form.expiry} onChange={update("expiry")} required className={inputClass} />
              <input placeholder="cvv_" value={form.cvv} onChange={update("cvv")} required className={inputClass} />
            </div>
          </section>

          {/* Summary */}
          <div className="border-t border-border pt-4 flex justify-between">
            <span className="data-text-secondary">order_total</span>
            <span className="data-text text-foreground">${totalPrice}</span>
          </div>

          <button
            type="submit"
            className="data-text py-3 px-6 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-center"
          >
            confirm_order
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
