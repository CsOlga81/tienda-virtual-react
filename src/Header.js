import './Header.css';

function Header() {
    return (
        <header>
            <h2>Mi Tienda Virtual</h2>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Carrito</li>
                </ul>
                <div>
                    <button>Registrese</button>
                    <button>Iniciar Sesión</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;