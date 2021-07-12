import React from 'react'

function NavBar() {
    return (
        <div className="wrap">
            <nav className="menu">
                <a href="#"><h1>Tienda flop</h1></a> 
                <ul>
                    <li><a href="#" className="on">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Colección 2021</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
