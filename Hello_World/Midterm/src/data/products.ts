import oversizedTee from "@/assets/OVERSIZED_TEE.png";
import utilityHoodie from "@/assets/UTILITY_HOODIE.png";

export interface Product {
  id: string;
  src: string;
  name: string;
  price: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "001",
    src: oversizedTee,
    name: "oversized_tee",
    price: "50",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "002",
    src: utilityHoodie,
    name: "utility_hoodie",
    price: "100",
    sizes: ["S", "M", "L", "XL"],
  },
];
