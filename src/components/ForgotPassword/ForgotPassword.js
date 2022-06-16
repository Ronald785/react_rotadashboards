import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef()
  const { resetUserPassword } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await resetUserPassword(emailRef.current.value);
    } catch {
      console.log("Erro redefinir senha!");
    }
    setLoading(false);
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="container">
            <div className="login">
                <h1>Recuperar Senha</h1>
                <div className="inputField email">
                    <input type="email" id="email" ref={emailRef} placeholder="E-mail" />
                </div>
                <button className="btn" id="btnLogin" type="submit" disabled={loading}>Recuperar</button>
                <button className="btn">
                    <Link to="/login">Já tem uma conta?</Link>
                </button>
            </div>
        </div>
    </form>
    </>
  );
}

export default Login;