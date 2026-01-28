import React from "react";
import Wrapper from "../shared/Wrapper";
import SectionStart from "../shared/SectionStart";
import Remote from "../../assests/images/remote.png";
import FlashSaleSection from "../shared/FlashSection";

const products = [
  {
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    imageSrc: Remote,
    discount: "-45%",
    rating: 5,
  },
  {
    title: "AK-900 Wired Keyboard",
    price: "$960",
    imageSrc: Remote,
    discount: "-35%",
    rating: 5,
  },
  {
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    imageSrc: Remote,
    discount: "-30%",
    rating: 5,
  },
  {
    title: "RGB Gaming Mouse",
    price: "$50",
    imageSrc: Remote,
    discount: "-25%",
    rating: 4,
  },
  {
    title: "Gaming Headset",
    price: "$80",
    imageSrc: Remote,
    discount: "-40%",
    rating: 5,
  },
  {
    title: "Gaming Chair",
    price: "$150",
    imageSrc: Remote,
    discount: "-20%",
    rating: 4,
  },
];

const Products: React.FC = () => {
  return (
    <Wrapper>
      <SectionStart text="Our Products" />
      <FlashSaleSection
        sectionTitle="Explore Our Products"
        products={products}
      />
    </Wrapper>
  );
};

export default Products;
