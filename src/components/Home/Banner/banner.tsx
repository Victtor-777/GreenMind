import Image from "next/image";
import style from "./banner.module.css";

export default function Banner() {
  return (
    <div className={style.banner_bg}>
      <section className={`${style.banner}`}>
        <div className={style.banner_content}>
          <h1>Buy your dream plants</h1>
          <div className={style.banner_numbers}>
            <div className={style.number1}>
              <span>50+</span>
              <p>Plant Species</p>
            </div>
            <div className={style.number2}>
              <span>100+</span>
              <p>Customers</p>
            </div>
          </div>

          <div className={style.banner_search}>
            <form>
              <input type="text" placeholder="What are you looking for?" />
              <button>
                <Image
                  src={"/assets/search-line.svg"}
                  width={20}
                  height={20}
                  alt="lupa"
                />
              </button>
            </form>
          </div>
        </div>

        <div>
          <Image
            className={style.banner_plant}
            src={"/assets/planta_banner.png"}
            width={411}
            height={494}
            alt="plant"
          />
          <div className={style.banner_img}></div>
        </div>
      </section>
    </div>
  );
}
