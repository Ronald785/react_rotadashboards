import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmeRef = useRef()
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value === passwordConfirmeRef.current.value) {
        try {
        setLoading(true);
          await signup(emailRef.current.value, passwordRef.current.value);
          navigate("/");
        } catch {
          console.log("Erro redefinir senha!");
        }
        setLoading(false);
    }
    else {
        alert("Senhas divergem!");
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="container">
            <div className="login">
                <h1>Criar Usuário</h1>
                <div className="inputField email">
                    <input type="email" id="email" ref={emailRef} placeholder="E-mail" />
                </div>
                <div className="inputField password">
                    <input type="password" id="password" ref={passwordRef} placeholder="Senha" />
                </div>
                <div className="inputField password">
                    <input type="password" id="passwordConfirme" ref={passwordConfirmeRef} placeholder="Confirmar senha" />
                </div>
                <button className="btn" id="btnLogin" type="submit" disabled={loading}>Criar</button>
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