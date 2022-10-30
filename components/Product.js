import React from "react";
import styles from "../styles/Product.module.css";
import Buy from "./Buy";


export default function Product({ product }) {
  const { id, PName, TCost, PDesc, IURL } = product;

  return (
    <div className={styles.product_container}>
      <div>
        <img className={styles.product_image} src={IURL} alt={PName} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{PName}</div>
          <div className={styles.product_description}>{PDesc}</div>
        </div>

        <div className={styles.product_action}>
          <div className={styles.product_price}>{TCost} $PAWS</div>
          <Buy itemID={id} />
        </div>
      </div>
    </div>
  );
}
