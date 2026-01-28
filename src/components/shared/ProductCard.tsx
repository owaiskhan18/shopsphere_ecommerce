import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { BsCartPlusFill } from "react-icons/bs";
import Star from "../../assests/images/Vector_1.png";
import type { StaticImageData } from "next/image";

interface ProductCardProps {
  title: string;
  price: string;
  discount?: string;
  imageSrc: string | StaticImageData;
  rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  discount = "0%",
  imageSrc,
  rating = 5,
}) => {
  return (
    <div className="w-full md:w-[30%] lg:w-[30%] cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
      {/* Card Box */}
      <div className="bg-[#F5F5F5] p-4 rounded-sm relative">
        {/* Discount Badge */}
        <div className="bg-[#DB4444] text-white text-sm px-3 py-1 rounded-sm absolute top-3 left-3">
          {discount}
        </div>

        {/* Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <CiHeart className="bg-white rounded-full p-2 text-4xl cursor-pointer" />
          <BsCartPlusFill className="bg-white rounded-full p-2 text-4xl cursor-pointer" />
        </div>

        {/* Product Image */}
        <div className="flex justify-center mt-8">
          <Image src={imageSrc} alt={title} />
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white p-2 rounded-sm mt-2">
        <h5 className="text-sm font-medium">{title}</h5>
        <h6>{price}</h6>

        {/* Rating */}
        <div className="flex gap-x-1 mt-1">
          {Array.from({ length: rating }).map((_, idx) => (
            <Image key={idx} src={Star} alt="star" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
