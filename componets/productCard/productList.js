import Product from "./product";
import { pics } from "./image";
const ProductList = () => {
  return (
    <div>
      {pics.map((i, j) => {
        return (
          <Product
            key={j}
            id={i.id}
            name={i.userName}
            price={i.price}
            disc={i.discription}
          />
        );
      })}
    </div>
  );
};
export default ProductList;
