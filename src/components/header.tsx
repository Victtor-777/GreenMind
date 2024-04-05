"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.shadow_header : ""}`}
    >
      <nav className={`${styles.nav} container`}>
        <a className={styles.logo} href="/">
          <Image
            src={"/assets/GREENMIND.svg"}
            alt="Logo GreenMind"
            width={141}
            height={22}
          />
        </a>
        <div className={styles.nav_menu}>
          <div className={`${styles.nav_left} ${active ? styles.active : ""}`}>
            <ul>
              <li className={styles.links}>
                <Link href={"#"}>Home</Link>
              </li>
              <li className={styles.links}>
                <Link href={"#products"}>Products</Link>
              </li>
              <li className={styles.links}>
                <Link href={"#about"}>About us</Link>
              </li>
              <li className={styles.links}>
                <Link href={"#categories"}>Categories</Link>
              </li>
              <li className={styles.links}>
                <Link href={"#reviews"}>Reviews</Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav_right}>
            <a href="/">
              <Image
                src={"/assets/cart.svg"}
                alt="cart shop"
                width={24}
                height={24}
              />
            </a>
            <a href="/">
              <Image
                src={"/assets/person.svg"}
                alt="profile"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <button
          className={`${styles.btn_mobile} ${active ? styles.active : ""}`}
          onClick={handleClick}
        >
          <span className={styles.hamburger}></span>
          {/* <span className={styles.hamburger2}></span>
          <span className={styles.hamburger3}></span> */}
        </button>
      </nav>
    </header>
  );
}
