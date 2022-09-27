import Product from "./product";
const ProductList = ({pics})=> {
    const ProductComponent = pics.map(i=>{
        console.log(pics[i]);
    return <Product id={pics[i].id} name={pics[i].picName} price={pics[i].price} disc={pics[i].discription}/>});
    return (
        {ProductComponent}
    )
}
export default ProductList;