import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="page-header">
                <div>
                    <h1>Sobre Nós</h1>
                    <small>Informações sobre o propósito do projeto</small>
                </div>
            </div>

            <div className="cards-dev">
                <div className="card-dev">
                    <h1>Objetivo do site</h1>
                    <p>A função do RotaDashboards é facilitar a análise das vendas de uma empresa de roupas. O website foi desenvolvido para a aula de desenvolvimento web do 5° semestre do curso de TADS do IFSP</p>
                </div> 

                <div className="card-dev">
                    <h1>Contatos</h1> 
                    <p>E-mail: ronald_marcos@rotadashboards.com</p>
                    <p>Telefone: (19) 3221-6314</p>
                    <p>WhatsApp: (19) 97755-6644</p>
                </div> 
            </div>

        </div>
    );
};

export default About;