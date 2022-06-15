import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-main">
                <div className="sidebar-user">
                    <img src="https://avatars.githubusercontent.com/u/65602274?v=4" alt="RonaldPhoto" />
                    <div>
                        <h3>Ronald Mateus</h3>
                        <span>ronaldmateus785@gmail.com</span>
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
    );
};

export default Sidebar;
