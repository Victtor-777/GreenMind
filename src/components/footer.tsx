import Image from "next/image";
import style from "./footer.module.css";

export function Footer() {
  return (
    <footer className={style.footer_bg}>
      <div className={`${style.footer_content} container`}>
        <div className={style.footer_logo}>
          <Image
            src={"/assets/GREENMIND_footer.svg"}
            alt="Logo Greenmind"
            width={106}
            height={16}
          />
          <p>We help you find your dream plant</p>
          <div className={style.footer_list_icons}>
            <div className={style.footer_icon}>
              <Image
                src={"/assets/footer_icon_01.svg"}
                alt="Facebook"
                width={48}
                height={48}
              />
            </div>
            <div className={style.footer_icon}>
              <Image
                src={"/assets/footer_icon_02.svg"}
                alt="Facebook"
                width={48}
                height={48}
              />
            </div>
            <div className={style.footer_icon}>
              <Image
                src={"/assets/footer_icon_03.svg"}
                alt="Facebook"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className={style.footer_list}>
          <div className={style.footer_item}>
            <h3>Information</h3>
            <a href="/">About</a>
            <a href="/">Product</a>
            <a href="/">Blog</a>
          </div>
          <div className={style.footer_item}>
            <h3>Company</h3>
            <a href="/">Community</a>
            <a href="/">Career</a>
            <a href="/">Our story</a>
          </div>
          <div className={style.footer_item}>
            <h3>Contact</h3>
            <a href="/">Getting Started</a>
            <a href="/">Pricing</a>
            <a href="/">Resources</a>
          </div>
        </div>
      </div>
      <p className={`${style.footer_copyright}`}>
        2023 all Right Reserved Term of use GREENMIND
      </p>
    </footer>
  );
}
