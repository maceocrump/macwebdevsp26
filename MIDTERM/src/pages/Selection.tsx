import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Selection = () => {
  const navigate = useNavigate();
  const { items, removeItem, totalPrice } = useCart();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <section className="w-full max-w-lg flex flex-col gap-8">
          <div>
            <span className="data-text text-foreground text-sm block">selection_</span>
            <span className="data-text-secondary mt-1 block">{items.length}_items</span>
          </div>

          {items.length === 0 ? (
            <div className="data-text-secondary py-20 text-center">no_items_selected</div>
          ) : (
            <>
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <article
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 items-center border-b border-border pb-4"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                      style={{ filter: "grayscale(100%)" }}
                    />
                    <div className="flex-1">
                      <span className="data-text text-foreground block">{item.name}</span>
                      <span className="data-text-secondary mt-1 block">
                        size_{item.size} / qty_{item.quantity}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="data-text text-foreground block">
                        ${Number(item.price) * item.quantity}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="data-text-secondary hover:text-foreground transition-colors mt-1 block"
                      >
                        remove_
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-border pt-4">
                <span className="data-text-secondary">total_</span>
                <span className="data-text text-foreground text-sm">${totalPrice}</span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="data-text py-3 px-6 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-center"
              >
                claim_selection
              </button>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Selection;
