import React, {useContext} from 'react';
//context api consumation
import {CartContext} from "../contexts/CartContext";
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const {cart} = useContext(CartContext);
	console.log(cart);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};
	const removeItem = (item) => {
		 cart.filter((i) => item.id !== i.id);
		console.log("removing item");
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<CartContext.Provider value={{item, removeItem}}>
				<Item key={item.id}  />
				</CartContext.Provider>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
