import React from "react";
import Wrapper from "../shared/Wrapper";
import SectionStart from "../shared/SectionStart";
import Remote from "../../assests/images/remote.png";
import FlashSaleSection from "../shared/FlashSection";

    const products = [
  { title: "HAVIT HV-G92 Gamepad", price: "$120", imageSrc: Remote, discount: "-45%", rating: 5 },
  { title: "AK-900 Wired Keyboard", price: "$960", imageSrc: Remote, discount: "-35%", rating: 5 },
  { title: "IPS LCD Gaming Monitor", price: "$370", imageSrc: Remote, discount: "-30%", rating: 5 },
  { title: "S-Series Comfort Chair ", price: "$375", imageSrc: Remote, discount: "-25%", rating: 5 },
];

 const NewCategory: React.FC = () => {
  return (
    <Wrapper>
      <SectionStart text="Categories" />
      <FlashSaleSection sectionTitle="Browse By Category" products={products} />
    </Wrapper>
  );
};


export default NewCategory;
