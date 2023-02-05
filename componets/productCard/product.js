import styles from "./Product.module.css";

const Product = ({ id, name, price, disc }) => {
  return (
    <li className={styles.productCard}>
      <img
        className={styles.image}
        alt="random"
        src={`https://picsum.photos/id/${id}/300/300`}
      />
      <div className={styles.cardBottom}>
        <h2 className={styles.cardTitle}>{name}</h2>
        <h3 className={styles.cardTitle}>${price}</h3>
        <p className={styles.discription}>{disc}</p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </li>
  );
};
export default Product;
