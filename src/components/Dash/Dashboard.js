import React from "react";
import Card from '../Card/Card';
import Invoice from '../Invoice/Invoice';
import { useState, useEffect } from 'react';
import './Dashboard.css';


function Dashboard(props) { 
  const [invoices, setInvoices] = useState([]);

  useEffect (() => {
    let url = "https://rotadashboards-default-rtdb.firebaseio.com/faturas.json";
    let newInvoice = [];
  
    fetch(url).then(response => response.json())
    .then(faturas => {
      for(let i = faturas.length-5; i < faturas.length-1; i++) {
        let objectInvoice = {};
        objectInvoice.name = faturas[i].nome;
        objectInvoice.type = faturas[i].tipo;
        objectInvoice.amount = faturas[i].quantidade;
        objectInvoice.number = faturas[i].número;
        objectInvoice.date = faturas[i].data;
  
        newInvoice.push(objectInvoice);
      }
      setInvoices(newInvoice);
    });
  }, []);

  return (
    <div>
      <div className="page-header">
        <div>
            <h1>Análise Dashboard</h1>
            <small>Monitoração das principais métricas</small>
        </div>
      </div>

      <div className="cards">
        {props.cards.map((card, index) => {
              return (
                  <Card 
                  key={index} 
                  titleCard={card.titleCard} 
                  subtitleCard={card.subtitleCard} 
                  valueCard={card.valueCard} 
                  percentageCard={card.percentageCard}/>
              )
          })}
      </div>

      <div className="jobs">
          <h2>Últimas Vendas <small>ver todas <span className="las la-arrow-right"></span></small></h2>
          
          <div className="table-responsive">
            <table>
              <tbody>
                {invoices.map((invoice, index) => {
                    return (
                        <Invoice 
                        key={index} 
                        typeName={invoice.name} 
                        typeInvoice={invoice.type} 
                        amountInvoice={invoice.amount} 
                        dateInvoice={invoice.date} 
                        numberInvoice={invoice.number}/>
                    )
                })}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;