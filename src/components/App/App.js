import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

import Dashboard from '../Dashboard/Dashboard';
import Menu from '../Menu/Menu';
import Graphics from '../Graphics/Graphics';
import Team from '../Team/Team';
import About from '../About/About';
import Report from '../Report/Report';
import Config from '../Config/Config';

import PrivateRoute from '../PrivateRoute/PrivateRoute';

import AuthProvider from '../../context/AuthProvider';
import DatabaseProvider from '../../context/DatabaseProvider';

import './App.css';

function App() {
  const [cards] = useState(
    [
      {
        titleCard: "Crescimento",
        subtitleCard: "Valor",
        valueCard: "R$75.000",
        percentageCard: "5% mais que o mes anterior"
      },
      {
        titleCard: "Vendas",
        subtitleCard: "N° de vendas",
        valueCard: "4.523",
        percentageCard: "7%  mais queo o mês anterior"
      },
      {
        titleCard: "Lucro",
        subtitleCard: "Total lucrado",
        valueCard: "R$30.085",
        percentageCard: "6%  mais queo o mês anterior"
      },
    ]
  );

  return (
    <div className="App">
    <input type="checkbox" id="sidebar-toggle"/>
      <BrowserRouter> 
        <AuthProvider>
        <Menu />
          <DatabaseProvider>

            <div className="main-content">
              <header>
                <div className="menu-toggle">
                  <label htmlFor="sidebar-toggle">
                    <span className="las la-bars"></span>
                  </label>
                </div>
                <h1 style={{fontSize:'24px'}}>RotaDashboard</h1>
              </header>

              <main>
                <Routes>
                  <Route path="/" element={
                    <PrivateRoute>
                      <Dashboard cards={cards}/>
                    </PrivateRoute>
                  }/>

                  <Route path="/graphics" element={
                    <PrivateRoute>
                      <Graphics />
                    </PrivateRoute>
                  }/>

                  <Route path="/team" element={
                    <PrivateRoute>
                      <Team />
                    </PrivateRoute>
                  }/>

                  <Route path="/report" element={
                    <PrivateRoute>
                      <Report />
                    </PrivateRoute>
                  }/>

                  <Route path="/config" element={
                    <PrivateRoute>
                      <Config />
                    </PrivateRoute>
                  }/>

                  <Route path="/about" element={
                    <PrivateRoute>
                      <About />
                    </PrivateRoute>
                  }/>

                  <Route path="/login" element={
                      <Login />
                  }/>

                  <Route path="/signup" element={
                      <Signup />
                  }/>

                  <Route path="/forgotPassword" element={
                      <ForgotPassword />
                  }/>
                </Routes>
              </main>

              <footer>
                <h1>Desenvolvedores</h1>
                <ul>
                  <li>Ronald Almeida</li>
                  <li>Marcos Ota</li>
                </ul>
              </footer>
            </div>
          </DatabaseProvider>
        </AuthProvider>
      </BrowserRouter>
      <label htmlFor="sidebar-toggle" className="body-label"></label>
    </div>
  );
}

export default App;
