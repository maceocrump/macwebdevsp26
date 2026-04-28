import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [collected, setCollected] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <span className="data-text text-foreground">product_not_found</span>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCollect = () => {
    if (!selectedSize) return;
    addItem({
      id: product.id,
      src: product.src,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
    });
    setCollected(true);
    setTimeout(() => setCollected(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-5xl w-full items-center">
          {/* Image */}
          <section className="w-full md:w-1/2 max-w-md">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-auto block"
              style={{ filter: "grayscale(100%)" }}
            />
          </section>

          {/* Details */}
          <section className="w-full md:w-1/2 max-w-md flex flex-col gap-6">
            <div>
              <span className="data-text text-foreground text-sm block">{product.name}</span>
            </div>

            <div className="data-text text-foreground text-sm">${product.price}</div>

            <div>
              <span className="data-text text-foreground block mb-2">size_select</span>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`data-text px-3 py-2 border transition-colors ${
                      selectedSize === size
                        ? "border-foreground text-foreground bg-foreground/10"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCollect}
              disabled={!selectedSize}
              className={`data-text py-3 px-6 border transition-all duration-300 ${
                !selectedSize
                  ? "border-border text-muted-foreground cursor-not-allowed opacity-40"
                  : collected
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              {collected ? "item_collected ✓" : "collect_item"}
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
