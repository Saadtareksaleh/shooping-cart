import { Button, Container, Image } from "react-bootstrap";
import { Table  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from './product';
import { clear, deleteFromCart } from "./rtk/slices/cart-slice";

function Cart () {
    const cart= useSelector(state=> state.cart);
    console.log(cart);

    const dispatch=useDispatch()
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }

const totalcart = cart.reduce((acc,product)=>{
    acc+=product.price *product.quantity;
    return acc;
},0)

    return (

       <>
       <Container>
        <h1 className="py-5">Welcome to Cart</h1>
        <Button variant="primary" className="mb-3" onClick={()=>dispatch(clear())} >Cleat Cart</Button>
        <h5>Total Price: {totalcart.toFixed(2)}$ </h5>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>img</th>
          <th>Price</th>
          <th>quantity</th>
          <th>totalPrice</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
         {cart.map((product)=>(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td><Image src={product.image} alt={product.title} style={{width:"100px",height:"100px" }}></Image></td>
            <td>{product.price}$</td>
            <td>{product.quantity}</td>
            <td>{ TotalPrice(product.price,product.quantity)} $ </td>
            <td><Button variant="danger" onClick={()=> dispatch(deleteFromCart(product))} >Delete</Button></td>
          </tr>

         ))}
      </tbody>
    </Table> 
       </Container>
       </>

    )
}
export default Cart;