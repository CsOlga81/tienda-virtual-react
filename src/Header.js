import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate(); /*Permite cambiar de ruta con código*/
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
                    <button onClick={() => navigate("/login")}>Inicia Sesión</button>
                    <button onClick={() => navigate("/register")}>Regístrate</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;