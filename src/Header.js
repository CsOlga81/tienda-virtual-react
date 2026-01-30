/*importe NavLink que me permite aplicar estilo automático cuando esta activa la ruta*/
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate(); /*Permite cambiar de ruta con código*/
    const location = useLocation(); /*para que React sepa qué página esta activa*/
    return (
        <header>
            <h2>Mi Tienda Virtual</h2>
            <nav>
                <ul>        {/* className recibe una funcion para evaluar si la ruta esta activa*/}
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : ""}>Inicio</NavLink></li>
                    <li><NavLink to="/productos" className={({ isActive }) => isActive ? "activo" : ""}>Productos</NavLink></li>
                    <li><NavLink to="/carrito" className={({ isActive }) => isActive ? "activo" : ""}>Carrito</NavLink></li>
                </ul>
                <div>
                    <button className={location.pathname === "/login" ? "btn-active" : ""} onClick={() => navigate("/login")}>Inicia Sesión</button>
                    <button className={location.pathname === "/register" ? "btn-active" : ""} onClick={() => navigate("/register")}>Regístrate</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;