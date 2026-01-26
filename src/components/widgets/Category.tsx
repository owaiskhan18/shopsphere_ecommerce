import React from "react";
import Wrapper from "../shared/Wrapper";
import CategoryList from "../shared/CategoryList";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImg from '../../assests/images/hero.png'
import Image from "next/image";
import styles from './Category.module.css';

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
      <section className={styles.categorySection}>
        {/* Left column: categories */}
        <div className={styles.categoryLeft}>
          {items.map((item, index) => (
            <div key={index} className={styles.categoryItem}>
              <CategoryList item={item} />
              {index < 2 && <MdKeyboardArrowRight className="text-gray-500" />}
            </div>
          ))}
        </div>

        {/* Right column: image */}
        <div className={styles.categoryRight}>
          <Image
            src={HeroImg}
            alt="hero"
            className={styles.categoryImage}
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default Category;
