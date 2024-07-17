import React, { useState } from 'react';
import './AddToCart.css';
import products from './ProductsAddToCart';
import { FaShoppingCart, FaTrash, FaDog, FaShoppingBag } from 'react-icons/fa'; 
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PdUYT2N46484aNlp2wqF7tJnBNjLyuzAY0VcBktjZZRqw903396eisnCiwtzC23k9daru3sFbgBheBTJlvTAEGg00H7nziAww');

function AddToCart() {
    const [cart, setCart] = useState([]);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const getTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const handlePayment = async () => {
        const items = cart.map(item => ({
            name: item.name,
            price: item.price * 100,
            quantity: item.quantity,
        }));

        const response = await fetch('http://localhost:3001/create-checkout-session', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items }),
      });
      

        const data = await response.json();
        console.log('Response from server:', data);
        const stripe = await stripePromise;
        
        const { error } = await stripe.redirectToCheckout({
            sessionId: data.id,
        });

        if (error) {
            console.error(error);
        }
    };

    return (
        <div className='div-body'>
            <div className='header-cart'>
                <p className='logo-cart'>Dog Wash Commerce <FaDog /> </p>
                <div className='cart'><FaShoppingCart style={{ marginRight: '8px' }} /> Itens in cart: {cart.length}</div>
            </div>
            <div className='container-cart'>
                <div className="products-cart">
                    {products.map((product) => (
                        <div key={product.id} className="product-cart">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price.toFixed(2)}</p>
                            <button onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
                    ))}
                </div>
                <div className='sidebar-cart'>
                    <div className='head-cart'>
                        <p>My Cart <FaShoppingBag /> </p>
                    </div>
                    <div id='cartItem'>
                        {cart.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <p>{item.name}</p>
                                    <p>${item.price.toFixed(2)}</p>
                                    <FaTrash onClick={() => removeFromCart(index)} style={{ cursor: 'pointer', color: 'red' }} />
                                </div>
                            ))
                        )}
                    </div>
                    <div className='foot'>
                        <h3>Total</h3>
                        <h2 id='total'>${getTotal().toFixed(2)}</h2>
                        <button className='Btn-pagamento' onClick={handlePayment}>Efetuar Pagamento</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;

