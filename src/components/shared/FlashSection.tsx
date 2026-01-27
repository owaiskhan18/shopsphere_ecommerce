import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ProductCard from "./ProductCard";
import type { StaticImageData } from "next/image";

interface Product {
  title: string;
  price: string;
  imageSrc: string | StaticImageData;
  discount?: string;
  rating?: number;
}

interface FlashSaleSectionProps {
  sectionTitle: string;   // e.g., "Flash Sales"
  products: Product[];
  buttonText?: string;    // e.g., "View All Products"
}

const FlashSaleSection: React.FC<FlashSaleSectionProps> = ({
  sectionTitle,
  products,
  buttonText = "View All Products",
}) => {
  return (
    <section className="my-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center mt-4">
        <h4 className="text-xl font-semibold">{sectionTitle}</h4>

        <div className="flex items-center gap-x-3">
          <GoArrowLeft className="bg-[#F5F5F5] rounded-full p-1.5 text-3xl cursor-pointer" />
          <GoArrowRight className="bg-[#F5F5F5] rounded-full p-1.5 text-3xl cursor-pointer" />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 flex justify-around flex-wrap gap-4">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-10">
        <button className="bg-[#DB4444] text-white px-3 py-2 rounded-sm cursor-pointer">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default FlashSaleSection;