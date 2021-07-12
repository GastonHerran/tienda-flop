import React from 'react'

function NavBar() {
    return (
        <div className="wrap">
            <nav className="menu">
                <a href="#"><h1>Tienda flop</h1></a> 
                <ul>
                    <li><a href="https://ghdesarrollo.com/" className="on">Inicio</a></li>
                    <li><a href="#servicios">Productos</a></li>
                    <li><a href="#servicios">Colección 2021</a></li>
                    <li><a href="trabajos">Nosotros</a></li>
                    <li><a href="#nosotros">Blog</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
