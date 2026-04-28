import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductFeed from "@/components/ProductFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ProductFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
