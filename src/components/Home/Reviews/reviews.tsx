import Image from "next/image";
import styles from "./reviews.module.css";

export function Reviews() {
  return (
    <section className={`${styles.reviews} container`}>
      <h2>What customers say about GREEMIND?</h2>

      <div className={styles.review_container}>
        <div className={styles.review_content}>
          <p>
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className={styles.review_text}>
            <div className={styles.review_user_info}>
              <Image
                src={"/assets/review.svg"}
                alt="quotation marks"
                width={48}
                height={41}
              />
              <div>
                <h3>John Doe</h3>
                <p>Youtuber</p>
              </div>
            </div>
            <div className={styles.review_user_star}>
              <Image
                src={"/assets/star.svg"}
                alt="star review"
                width={20}
                height={21}
              />
              <span>4.5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
