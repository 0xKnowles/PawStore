import React from "react";
import styles from "../styles/Product.module.css";
import Buy from "./Buy";
import prods from "../pages/index";


export default function Product({ product }) {
  const { id, PName, TCost, PDesc, IURL } = product;

  return (
    <div className={styles.product_container}>
      <div>
        <img className={styles.product_image} src={product.IURL} alt={product.PName} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{product.PName}</div>
          <div className={styles.product_description}>{product.PDesc}</div>
        </div>

        <div className={styles.product_action}>
          <div className={styles.product_price}>{product.TCost} $PAWS</div>
          <Buy itemID={product.id} />
        </div>
      </div>
    </div>
  );
}
