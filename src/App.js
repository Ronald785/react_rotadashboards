import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Sidebar from '../src/components/Sidebar/Sidebar';
import Team from '../src/components/Team/Team';
import Report from '../src/components/Report/Report';
import Graphics from '../src/components/Graphics/Graphics';
import Cards from './components/Cards/Cards.js';

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
            <Sidebar />

            <div className="main-content">
                <main>
                    <div className="page-header">
                        <div>
                            <h1>Análise Dashboard</h1>
                            <small>Monitoração das principais métricas</small>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<Cards cards={cards}/>} /> 
                        <Route path="/graphics" element={<Graphics />} /> 
                        <Route path="/team" element={<Team />} /> 
                        <Route path="/Report" element={<Report />} /> 

                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;