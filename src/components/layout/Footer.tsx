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
              <h2 className="font-bold">Exclusive</h2>
              <h3>Subscribe</h3>
              <h4 className="font-light">Get 10% off your first order</h4>

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
              <h2 className="font-bold">Support</h2>
              <span>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</span>
              <span>exclusive@gmail.com</span>
              <span>+88015-88888-9999</span>
            </div>

            {/* 3 - Account */}
            <div className={styles["footer-section"]}>
              <h2 className="font-bold">Account</h2>
              <span>My Account</span>
              <span>Login / Register</span>
              <span>Cart</span>
              <span>Wishlist</span>
              <span>Shop</span>
            </div>

            {/* 4 - Quick Link */}
            <div className={styles["footer-section"]}>
              <h2 className="font-bold">Quick Link</h2>
              <span>Privacy Policy</span>
              <span>Terms Of Use</span>
              <span>FAQ</span>
              <span>Contact</span>
            </div>

            {/* 5 - Download App */}
            <div className={styles["footer-section"]}>
              <h2 className="font-bold">Download App</h2>
              <span className="text-xs text-zinc-400">
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
                <TiSocialFacebook />
                <FaTwitter />
                <IoLogoInstagram />
                <ImLinkedin2 />
              </div>
            </div>
          </div>

          {/* Footer copyright: flex row */}
          <div className="flex justify-center items-center mt-12 gap-2 text-sm text-zinc-400">
            <Image src={Vector} alt="copyright" className="w-4 h-4" />
            <span>Copyright Rimel 2022. All right reserved</span>
          </div>
        </footer>
      </Wrapper>
    </div>
  );
};

export default Footer;
