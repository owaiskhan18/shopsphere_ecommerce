import React from "react";
import Wrapper from "../shared/Wrapper";
import Img1 from "../../assests/images/img1.png";
import Image from "next/image";
import Link from "next/link";

const GalleryCrads = () => {
  return (
    <Wrapper>
      <section>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-start gap-6">
          {/* Side Card */}
          <div className="bg-black text-white px-6 py-6 flex flex-col justify-center items-center w-full lg:w-1/3">
            <Image src={Img1} alt="img" className="h-64 w-72 object-cover" />
            <div className="max-w-64 mt-4 text-center">
              <h3 className="text-xl font-semibold">PlayStation 5</h3>
              <h4 className="text-sm mt-2">
                Black and White version of the PS5 coming out on sale.
              </h4>
              <Link href="/shop">
                <button className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Part */}
          <div className="flex flex-col gap-5 w-full lg:w-2/3">
            {/* Top Right Card */}
            <div className="bg-black text-white p-4 flex justify-between items-center flex-row-reverse w-full h-36">
              <Image src={Img1} alt="img" className="h-20 w-20 object-cover" />
              <div className="max-w-64">
                <h3 className="text-lg font-semibold">PlayStation 5</h3>
                <h4 className="text-sm mt-1">
                  Black and White version of the PS5 coming out on sale.
                </h4>
                <Link href="/shop">
                  <button className="mt-2 px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Bottom Right Cards */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="bg-black text-white p-3 flex justify-between items-center flex-row-reverse w-full sm:w-1/2 h-48">
                <Image
                  src={Img1}
                  alt="img"
                  className="h-20 w-20 object-cover"
                />
                <div className="max-w-64">
                  <h3 className="text-lg font-semibold">PlayStation 5</h3>
                  <h4 className="text-sm mt-1">
                    Black and White version of the PS5 coming out on sale.
                  </h4>
                  <Link href="/shop">
                    <button className="mt-2 px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-black text-white p-3 flex justify-between items-center flex-row-reverse w-full sm:w-1/2 h-48">
                <Image
                  src={Img1}
                  alt="img"
                  className="h-20 w-20 object-cover"
                />
                <div className="max-w-64">
                  <h3 className="text-lg font-semibold">PlayStation 5</h3>
                  <h4 className="text-sm mt-1">
                    Black and White version of the PS5 coming out on sale.
                  </h4>
                  <Link href="/shop">
                    <button className="mt-2 px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default GalleryCrads;
