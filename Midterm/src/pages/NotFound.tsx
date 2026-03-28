import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <section className="text-center flex flex-col gap-4">
          <h1 className="data-text text-foreground text-2xl">404</h1>
          <p className="data-text-secondary">page_not_found</p>
          <Link to="/" className="data-text text-muted-foreground hover:text-foreground transition-colors">
            ← return_to_shop
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
