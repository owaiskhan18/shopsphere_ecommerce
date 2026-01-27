import React from "react";
import Wrapper from "../shared/Wrapper";
import CategoryList from "../shared/CategoryList";
import { MdKeyboardArrowRight } from "react-icons/md";
import Apple from "../../assests/images/apple.png";
import Mobile from "../../assests/images/mobile.png";
import PromoBanner from "../shared/PromoBanner";


const Category = () => {
  const items = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <Wrapper>
      <section className="flex flex-col lg:flex-row gap-6 lg:gap-10 my-8">

        {/* Left Column - Category List */}
        <div className="w-full lg:w-64 flex-shrink-0 lg:border-r border-gray-300 lg:pr-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-2 py-1">
              <CategoryList item={item} />
              {index < 2 && <MdKeyboardArrowRight className="text-gray-500" />}
            </div>
          ))}
        </div>

        {/* Right Column - Promo Banner */}
        <PromoBanner
          logo={Apple}
          title="iPhone 14 Series"
          subtitle="Up to 10% off Voucher"
          buttonText="Shop Now"
          buttonLink="/shop"
          mainImage={Mobile}
          showArrow={true}
        />
      </section>
    </Wrapper>
  );
};

export default Category;