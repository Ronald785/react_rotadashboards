import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Sidebar from '../src/components/Sidebar/Sidebar';
import Team from '../src/components/Team/Team';
import Report from '../src/components/Report/Report';
import Graphics from '../src/components/Graphics/Graphics';
import Dash from './components/Dash/Dash.js';
import Config from './components/Config/Config.js';

function App() {
 
  const [cards] = useState(
    [
      {
        titleCard: "Crescimento de vendas",
        subtitleCard: "Porcentagem do crescimento",
        valueCard: "R$75.000",
        percentageCard: "5% mais que o mes anterior"
      },
      {
        titleCard: "Vendas",
        subtitleCard: "Numero de vendas no mês",
        valueCard: "4.523",
        percentageCard: "7%  mais queo o mês anterior"
      },
      {
        titleCard: "Lucro",
        subtitleCard: "Valor lucrado",
        valueCard: "R$167.085",
        percentageCard: "5%  mais queo o mês anterior"
      },
    ]
  );
  
  return (
    <div className="App">
        <BrowserRouter>
            <input type="checkbox" id="sidebar-toggle"/>
            
            <Sidebar />
            
            <div className="main-content">
                <header>
                  <div className="menu-toggle">
                    <label for="sidebar-toggle">
                      <span className="las la-bars"></span>
                    </label>
                  </div>
                  <h1>RotaDashboards</h1>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<Dash cards={cards}/>} /> 
                        <Route path="/graphics" element={<Graphics />} /> 
                        <Route path="/team" element={<Team />} /> 
                        <Route path="/Report" element={<Report />} /> 
                        <Route path="/Config" element={<Config />} /> 
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
            <label for="sidebar-toggle" class="body-label"></label>
        </BrowserRouter>
    </div>
  );
}

export default App;