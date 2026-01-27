import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import type { StaticImageData } from "next/image";

interface PromoBannerProps {
  logo?: string | StaticImageData; // optional, image or text
  title?: string;
  subtitle: string; 
  buttonText?: string;
  buttonLink?: string;
  mainImage: string | StaticImageData;

  // optional button styling
  color?: string; // text color
  bgColor?: string; // background color
  px?: string; // padding-x
  py?: string; // padding-y
  round?: string;
  cursor?: string;
  shade?: string

  // optional arrow
  showArrow?: boolean;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  logo,
  title,
  subtitle,
  buttonText = "Shop Now",
  buttonLink = "/",
  mainImage,
  color = "text-white",
  bgColor = "bg-black",
  px = "px-4",
  py = "py-2",
  round = "rounded-sm",
  cursor = "cursor-pointer",
  showArrow = false, // default false
  shade = 'shadow-white'
}) => {
  return (
    <div className="bg-black w-full flex flex-col md:flex-row items-center justify-between
                    px-4 sm:px-8 md:px-12 lg:px-20 py-8 gap-6">

      {/* Text Section */}
      <div className="text-white flex flex-col items-center md:items-start text-center md:text-left">
        {(logo || title) && (
          <div className="flex items-center gap-x-3 mb-3">
            {logo && typeof logo === "string" ? (
              <span className="text-lg font-bold">{logo}</span>
            ) : logo ? (
              <Image src={logo} alt="logo" className="w-8 h-8" />
            ) : null}

            {title && <h5 className="text-sm sm:text-base">{title}</h5>}
          </div>
        )}

        <h6 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
          {subtitle}
        </h6>

        <div className="flex items-center gap-x-3 mt-5">
          <Link href={buttonLink}>
            <button
              className={`${color} ${bgColor} ${px} ${py} ${round} ${cursor} hover:opacity-80 transition`}
            >
              {buttonText}
            </button>
          </Link>
          {showArrow && <GoArrowRight />}
        </div>
      </div>

      {/* Image Section */}
<div className="w-full md:w-auto flex justify-center">
  <div className={`relative w-60 sm:w-72 md:w-80 lg:w-96 ${shade}`}>
    <Image
      src={mainImage}
      alt={title || subtitle}
      className="object-contain w-full h-full relative z-10"
      priority
    />
  </div>
</div>

     
    </div>
  );
};

export default PromoBanner;