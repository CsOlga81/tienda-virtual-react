import './Login.css'

function Login() {   /*Se crea un componente funcional llamado Login*/
    return (        /*Todo componente debe devolver algo para mostrar en pantalla*/
        
        <div className='login-container'>
            <div className='login-title'><h2>Inicia Sesión</h2></div>

            <form className='login-form'>
                <label>Nombre de Usuario</label>
                <input type='text' placeholder='Escribe tu usuario o correo electronico' />

                <label>Contraseña</label>
                <input type='password' placeholder='Escribe tu contraseña' />

                <button type='submit'>Ingresar</button>
            </form>
        </div>
    );
}

export default Login;