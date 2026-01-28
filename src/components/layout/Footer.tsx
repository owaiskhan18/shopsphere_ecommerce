import React from "react";
import Wrapper from "../shared/Wrapper";
import { IoMdSend } from "react-icons/io";
import Image from "next/image";
import BarCode from "../../assests/images/Qrcode 1.png";
import PlayImg from "../../assests/images/playstore.png";
import AppImg from "../../assests/images/appstore.png";
import Vector from "../../assests/images/Vector.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Wrapper>
        <footer className="my-14">
          {/* Footer main sections */}
          <div className={styles["footer-container"]}>
            {/* 1 - Exclusive */}
            <div className={styles["footer-section"]}>
              <h2 className="font-bold cursor-pointer">Exclusive</h2>
              <h3 className="cursor-pointer">Subscribe</h3>
              <h4 className="font-light cursor-pointer">
                Get 10% off your first order
              </h4>

              <div className={styles["email-input-container"]}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles["email-input"]}
                />
                <button className={styles["email-button"]}>
                  <IoMdSend />
                </button>
              </div>
            </div>

            {/* 2 - Support */}
            <div className={styles["footer-section"]}>
              <h2 className="font-bold cursor-pointer">Support</h2>
              <span className="cursor-pointer">
                111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
              </span>
              <span className="cursor-pointer">exclusive@gmail.com</span>
              <span className="cursor-pointer">+88015-88888-9999</span>
            </div>

            {/* 3 - Account */}
            <div className={styles["footer-section"]}>
              <h2 className="font-bold cursor-pointer">Account</h2>
              <span className="cursor-pointer">My Account</span>
              <span className="cursor-pointer">Login / Register</span>
              <span className="cursor-pointer">Cart</span>
              <span className="cursor-pointer">Wishlist</span>
              <span className="cursor-pointer">Shop</span>
            </div>

            {/* 4 - Quick Link */}
            <div className={styles["footer-section"]}>
              <h2 className="font-bold cursor-pointer">Quick Link</h2>
              <span className="cursor-pointer">Privacy Policy</span>
              <span className="cursor-pointer">Terms Of Use</span>
              <span className="cursor-pointer">FAQ</span>
              <span className="cursor-pointer">Contact</span>
            </div>

            {/* 5 - Download App */}
            <div className={styles["footer-section"]}>
              <h2 className="font-bold cursor-pointer">Download App</h2>
              <span className="text-xs text-zinc-400 cursor-pointer">
                Save $3 with App New User Only
              </span>
              <div className={styles["download-images"]}>
                <Image src={BarCode} alt="BarCode" className="w-24 h-auto" />
                <div className="flex flex-col gap-2">
                  <Image
                    src={PlayImg}
                    alt="PlayStore"
                    className="w-24 h-auto"
                  />
                  <Image src={AppImg} alt="AppStore" className="w-24 h-auto" />
                </div>
              </div>
              <div className={styles["social-icons"]}>
                <TiSocialFacebook className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <IoLogoInstagram className="cursor-pointer" />
                <ImLinkedin2 className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Footer copyright: flex row */}
          <div className="flex justify-center items-center mt-12 gap-2 text-sm text-zinc-400">
            <Image
              src={Vector}
              alt="copyright"
              className="w-4 h-4 cursor-pointer border border-white rounded-full p-1"
            />
            <span>Copyright Rimel 2022. All right reserved</span>
          </div>
        </footer>
      </Wrapper>
    </div>
  );
};

export default Footer;
