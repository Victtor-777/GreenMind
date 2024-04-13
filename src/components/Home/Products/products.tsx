import Image from "next/image";
import style from "./products.module.css";

export default function Products() {
  return (
    <div className={`${style.section_products}`}>
      <section className={`${style.products_section} container`}>
        <div className={style.products_information}>
          <h2>Best Selling Plants</h2>
          <p>Easiest way to healthy life by buying your favorite plants.</p>
          <button>See more →</button>
        </div>
        <div className={style.products_list}>
          <div className={style.products_item}>
            <Image
              src={"/assets/product_01.png"}
              width={300}
              height={363}
              quality={100}
              alt="plant product"
            />
            <span>Natural Plants</span>
            <p>₱ 1,400.00</p>
          </div>
          <div className={style.products_item}>
            <Image
              src={"/assets/product_02.png"}
              width={300}
              height={363}
              quality={100}
              alt="plant product"
            />
            <span>Artificial Plants</span>
            <p>₱ 900.00</p>
          </div>
          <div className={style.products_item}>
            <Image
              src={"/assets/product_03.png"}
              width={300}
              height={363}
              quality={100}
              alt="plant product"
            />
            <span>Semi-Artificial Plants</span>
            <p>₱ 3,500.00</p>
          </div>
        </div>
      </section>
    </div>
  );
}
