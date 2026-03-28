import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <header className="w-full border-b border-border">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="data-text text-foreground text-lg tracking-widest hover:opacity-70 transition-opacity">
          001
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="data-text text-muted-foreground hover:text-foreground transition-colors">
            shop
          </Link>
          {totalItems > 0 && (
            <Link to="/selection" className="data-text text-foreground hover:opacity-70 transition-opacity">
              selection_({totalItems})
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
