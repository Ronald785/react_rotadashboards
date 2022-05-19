import { useState } from 'react';
import './App.css';
import Card from '../src/components/Card/Card';

function App() {

  const [cards, setCards] = useState(
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
      <input type="checkbox" id="sidebar-toggle" />

      <div className="sidebar">
          <div className="sidebar-brand">
              <div className="brand-flex">
                  <span className="las la-toggle-on"></span>

                  <div className="brand-icons">
                      <span className="las la-bell"></span>
                      <span className="las la-user-circle"></span>
                  </div>
              </div>
          </div>

          <div className="sidebar-main">
              <div className="sidebar-user">
                  <img src="https://avatars.githubusercontent.com/u/65602274?v=4" alt="Ronald-photo" />
                  <div>
                      <h3>Ronald Mateus</h3>
                      <span>ronaldmateus785@gmail.com</span>
                  </div>
              </div>

              <div className="sidebar-menu">
                  <div className="menu-head">
                      <span>Dashboard</span>
                  </div>
                  <ul>
                      <li>
                          <a href="dashboard.html">
                              <span className="las la-chart-line"></span>
                              Dashboard
                          </a>
                      </li>
                      <li>
                          <a href="graphics.html">
                              <span className="las la-chart-bar"></span>
                              Gráficos
                          </a>
                      </li>
                      <li>
                          <a href="team.html">
                              <span className="las la-user-friends"></span>
                              Equipe
                          </a>
                      </li>
                      <li>
                          <a href="report.html">
                              <span className="las la-envelope"></span>
                              E-mail
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <div className="main-content">
          <header>
              <div className="menu-toggle">
                  <label for="sidebar-toggle">
                      <span className="las la-bars"></span>
                  </label>
              </div>

              <div className="header-icons">
                  <span className="las la-search"></span>
                  <span className="las la-bookmark"></span>
                  <span className="las la-sms"></span>
              </div>
          </header>

          <main>
              <div className="page-header">
                  <div>
                      <h1>Análise Dashboard</h1>
                      <small>Monitoração das principais métricas</small>
                  </div>
              
                  <div className="header-actions">
                      <button onclick="imprimir('main')">
                          <span className="las la-download"></span>
                          Exportar
                      </button>
                      <button>
                          <span className="las la-tools"></span>
                          Configurações
                      </button>
                  </div>
              </div>

            <div className="cards">
              {cards.map((card, index) => {
                return (
                  <Card key={index} titleCard={card.titleCard} subtitleCard={card.subtitleCard} valueCard={card.valueCard} percentageCard={card.percentageCard}/>
                )
              })}
            </div>
          </main>
      </div>
    </div>
  );
}

export default App;