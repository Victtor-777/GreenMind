import Image from "next/image";
import style from "./about.module.css";

export default function About() {
  return (
    <div className={style.about_bg}>
      <section className={`${style.about_section} container`}>
        <div className={style.about_info}>
          <h2>About us</h2>
          <p>Order now and appreciate the beauty of nature</p>
        </div>
        <div className={style.about_list}>
          <div className={style.about_item}>
            <div>
              <Image
                src={"/assets/about_01.svg"}
                alt="Large assortment"
                width={96}
                height={96}
              />
            </div>
            <h3>Large Assortment</h3>
            <p>
              we offer many different types of products with fewer variations in
              each category.
            </p>
          </div>
          <div className={style.about_item}>
            <div>
              <Image
                src={"/assets/about_02.svg"}
                alt="Large assortment"
                width={96}
                height={96}
              />
            </div>
            <h3>Fast & Free Shipping</h3>
            <p>
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </p>
          </div>
          <div className={style.about_item}>
            <div>
              <Image
                src={"/assets/about_03.svg"}
                alt="Large assortment"
                width={96}
                height={96}
              />
            </div>
            <h3>24/7 Support</h3>
            <p>
              answers to any business related inquiry 24/7 and in real-time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
