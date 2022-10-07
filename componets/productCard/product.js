const Product = ({ id, name, price, disc }) => {
  return (
    <li>
      <img alt="random" src={`https://picsum.photos/id/${id}/300/300`} />
      <h2>{name}</h2>
      <h2>{price}</h2>
      <p>{disc}</p>
      <button>Add to Cart</button>
    </li>
  );
};
export default Product;
