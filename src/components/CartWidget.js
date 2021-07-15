import React from 'react'
import carrito from '../img/carrito.svg';

function CartWidget() {
    return (
        <img src={carrito} className="carritoIcono" width="24px" />
    )
}

export default CartWidget