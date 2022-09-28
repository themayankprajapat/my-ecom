import Product from "./product";
import { pics } from "./image";
const ProductList = ()=> {
    const productComponent = pics.map(i=>{
        return <Product id={i.id} name={i.userName} price={i.price} disc={i.discription}/>
    });
    return(
        [productComponent]
    )
}
export default ProductList;