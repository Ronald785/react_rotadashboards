import React, { useRef, useState, useContext } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { DatabaseContext } from '../../context/DatabaseProvider';
import { Link, useNavigate  } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { readInvoices } = useContext(DatabaseContext);
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");

    } catch {
      console.log("Erro login!");
    }
    setLoading(false);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="container">
            <div className="login">
                <h1>Iniciar Sessão</h1>
                <div className="inputField email">
                    <input type="email" id="email" ref={emailRef} placeholder="E-mail" />
                </div>
                <div className="inputField password">
                    <input type="password" id="password" ref={passwordRef} placeholder="Senha" />
                </div>
                <button className="btn" id="btnLogin" type="submit" disabled={loading}>
                  Acessar
                </button>
                <button className="btn">
                    <Link to="/forgotPassword">Esqueceu a senha?</Link>
                </button>
                <button className="btn">
                    <Link to="/signup">Criar Conta</Link>
                </button>
            </div>
        </div>
    </form>
    <button onClick={readInvoices}>Ler</button>
    </>
  );
}

export default Login;