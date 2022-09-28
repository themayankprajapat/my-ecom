const Product = (props) =>{
    return (
        <div>
            <img alt="random" src={`https://picsum.photos/id/${props.id}/300/300`}/>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <p>{props.disc}</p>
            <button>Add to Cart</button>
        </div>
    )
}
export default Product;