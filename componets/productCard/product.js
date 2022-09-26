import {pics} from './image'
const Product = (props) =>{
    return (
        <div>
            <img src="https://picsum.photos/id/{pics[0].id}/300/300
" alt="random"/>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <p>{props.disc}</p>
            <button>Add to Cart</button>
        </div>
    )
}
export default Product;