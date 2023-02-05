import Product from "./product";
import { pics } from "./image";
import styles from "./Product.module.css";
const ProductList = () => {
  return (
    <ul className={styles.gridList}>
      {pics.map((i) => {
        return (
          <Product
            key={i}
            id={i.id}
            name={i.userName}
            price={i.price}
            disc={i.discription}
          />
        );
      })}
    </ul>
  );
};
export default ProductList;
