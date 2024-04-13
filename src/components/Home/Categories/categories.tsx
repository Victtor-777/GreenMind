import Image from "next/image";
import style from "./categories.module.css";

export function Categories() {
  return (
    <div className={style.categories_bg}>
      <div className={`${style.categories} container`}>
        <div className={style.categories_info}>
          <h2>Categories</h2>
          <p>Find what you are looking for</p>
        </div>
        <div className={style.categories_list}>
          <div className={style.categories_item}>
            <Image
              src={"/assets/categories_01.png"}
              alt="plants"
              width={352}
              height={512}
              quality={100}
            />
            <h3>Natural Plants</h3>
            <p>
              From vibrant ferns to elegant orchids, discover the perfect
              addition to you.
            </p>
            <button>Explore →</button>
          </div>
          <div className={style.categories_item}>
            <Image
              src={"/assets/categories_02.png"}
              alt="plants"
              width={352}
              height={512}
              quality={100}
            />
            <h3>Plant Accessories</h3>
            <p>
              Elevate your plant game with our curated selection of accessories.
            </p>
            <button>Explore →</button>
          </div>
          <div className={style.categories_item}>
            <Image
              src={"/assets/categories_03.png"}
              alt="plants"
              width={352}
              height={512}
              quality={100}
            />
            <h3>Artificial Plants</h3>
            <p>
              Add a touch of greenery to any space with our lifelike artificial
              plants.
            </p>
            <button>Explore →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
