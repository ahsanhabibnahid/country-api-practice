import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h5>This is Cart : {cart.length}</h5>
            <h5>Total Population : {totalPopulation}</h5>
        </div>
    );
};

export default Cart; 