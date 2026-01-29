import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";  /*contenedor de todas las rutas y route define una pantalla por URL*/
import Header from "./Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
   
      <BrowserRouter>
        <div>
         <Header />
         <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
