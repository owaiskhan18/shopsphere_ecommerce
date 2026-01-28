import Image from "next/image";
import React from "react";
import Rectangle from "../../assests/images/rectangle.png";

type TextProps = {
  text: React.ReactNode;
};

const SectionStart = ({ text }: TextProps) => {
  return (
    <div className="flex items-center gap-3">
      <Image src={Rectangle} alt="rectangle" />
      <h3 className="font-semibold text-lg text-[#DB4444]">{text}</h3>
    </div>
  );
};

export default SectionStart;
