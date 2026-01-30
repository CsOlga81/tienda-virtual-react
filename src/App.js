import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";  /*contenedor de todas las rutas y route define una pantalla por URL*/
import Header from "./Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
