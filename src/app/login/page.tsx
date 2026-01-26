"use client";

import Image from "next/image";
import React from "react";
import SignUser from "../../assests/images/pic_sign.png";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
import styles from "./Login.module.css";

const page = () => {
  const inputStyle =
    "w-72 px-1.5 py-1 border-transparent border-b-2 border-b-gray-400 focus:border-2 focus:border-[#DB4444] focus:outline-none rounded-sm transition-all duration-200";

  return (
    <Wrapper>
      <section className={styles.section}>
        
        {/* Image */}
        <div className={`flex-1 ${styles.imageBox}`}>
          <Image
            src={SignUser}
            alt="Sign Up"
            className="h-96 w-96 object-contain"
          />
        </div>

        {/* Form */}
        <div className={`flex-1 ${styles.formBox}`}>
          <div className="my-4 flex flex-col gap-y-3.5">
            <h2 className="text-3xl">Log in to ShopSphere</h2>
            <h4 className="text-md text-gray-600 font-semibold">
              Enter your details below
            </h4>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-y-4 my-6">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              className={inputStyle}
            />
          </div>

          {/* Button */}
          <div className="my-10 flex gap-x-12 items-center">
            <button className="bg-[#DB4444] w-28 py-2 rounded-sm text-white hover:bg-[#c93d3d] transition">
              Log in
            </button>

            <p className="text-[#DB4444] cursor-pointer">
              Forget Password?
            </p>
          </div>

          {/* Signup */}
          <div className="flex items-center gap-x-2">
            <p>Already have an account?</p>
            <Link
              href="/signup"
              className="underline underline-offset-8 font-medium"
            >
              Signup
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default page;
