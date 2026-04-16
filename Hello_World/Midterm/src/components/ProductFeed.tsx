import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const ProductFeed = () => {
  const navigate = useNavigate();

  return (
    <div className="product-feed">
      {products.map((product) => (
        <article
          key={product.id}
          className="product-item group cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="relative overflow-hidden">
            <img
              src={product.src}
              alt={product.name}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
          </div>
          <div className="mt-4 flex justify-between items-start">
            <div>
              <span className="data-text text-foreground block">{product.name}</span>
            </div>
            <div className="text-right">
              <span className="data-text text-foreground block">${product.price}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductFeed;
