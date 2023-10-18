import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './rtk/slices/product-slice';
import { addToCart } from './rtk/slices/cart-slice';


function Product () {

    const products = useSelector((state)=>state.products);
    console.log(products); 

    const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchProducts());
}, []);

    return (
        <div className="container py-5">
            <Row className='py-5'>
                {products.map((product)=> (
                                    <div className="col" key={product.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={product.image} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                            {product.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={()=> dispatch(addToCart(product))} >Add to Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                ))}
            </Row>
        </div>

    )
}

export default Product;