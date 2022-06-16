import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../context/AuthProvider';
import { useNavigate  } from 'react-router-dom';

import logo from '../../assets/images/rota.png';

const Sidebar = () => {
    const { logout, currentUser } = useAuth();
    const navigate = useNavigate();

    let emailUser = '';
    let displayName = '';
    let photoUrl = logo;

    if(currentUser != null) {
        emailUser = currentUser.email;
        displayName = currentUser.displayName;
        photoUrl = currentUser.photoURL;
    }
  
    async function handleLogout() {
      try {
        await logout();
        navigate("/login");
      } catch {
        alert("Erro Deslogando!");
      }
    }

    return (
        <>
        <div className="sidebar">
            <div className="sidebar-main">
                <span className="las la-sign-out-alt" onClick={handleLogout}></span>
                <div className="sidebar-user">
                    <img src={photoUrl} alt={displayName} />
                    <div>
                        <h3>{displayName}</h3>
                        <span>{emailUser}</span>
                    </div>
                </div>

                <div className="sidebar-menu">
                    <div className="menu-head">
                        <span>Navegação</span>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/graphics">Gráficos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">Sobre nós</NavLink>
                            </li>
                            <li>
                                <NavLink to="/team">Equipe</NavLink>
                            </li>
                            <li>
                                <NavLink to="/report">Contate-nos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/config">Configurações</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
};

export default Sidebar;
