import './Register.css';  /*Importo el archivo css de tegistro para el formulario*/

/*Este componente es la pantalla de registro para el cliente*/
function Register() {
    return (
        /*Para centrar y dar estructura al formulario*/ 
        <div className="register-container">
            <div className="register-title"><h2>Regístrate</h2></div>

            <form className='register-form'>
                <label>Nombre completo</label>
                <input type='text' placeholder='Ingresa tu nombre' />

                <label>Correo electrónico</label>
                <input type='email' placeholder='Ingresa tu correo' />

                <label>Contraseña</label>
                <input type='password' placeholder='Ingresa tu contraseña' />

                <label>Confirmar contraseña</label>
                <input type='password' placeholder='Confirma tu contraseña' />

                <label>Teléfono</label>
                <input type='text' placeholder='Ingresa tu teléfono' />

                <label>Fecha de registro</label>
                <input type='date' placeholder='Elige la fecha' />

                <button type='submit'>Registrarme</button>

                <label>Ya estoy registrado</label>

            </form>
            
        </div>
    );
}

export default Register;