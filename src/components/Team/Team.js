import React from 'react';
import './Team.css';
import imageRonald from '../Team/ronald.jpg';
import imageMarcos from '../Team/marcos_photo.jpg'; 

const Team = () => {
    return (
        <div>
            <div className="page-header">
                <div>
                    <h1>Equipe do Dashboard</h1>
                    <small>Informações de contato dos desenvolvedores</small>
                </div>
            </div>

            <div className="cards-dev">
                <div className="card-dev">
                    <img src={imageRonald} alt="Ronald" className="img-team"/>
                    <h1>Ronald Almeida</h1>
                    <h3>Contate-me</h3>
                    <div className="info-person">
                        <a href="https://github.com/Ronald785">
                            <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ronald785/">
                            <img src="https://img.icons8.com/material-outlined/24/000000/linkedin--v1.png" alt="Linkedin"/>
                        </a>
                        <a href="https://www.instagram.com/rndmateus/">
                            <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" alt="Instagram"/>
                        </a>
                        <a href="mailto:ronaldmateus785@gmail.com">
                            <img src="https://img.icons8.com/material-outlined/24/000000/gmail-login.png" alt="E-mail"/>
                        </a>
                    </div>
                </div> 

                <div className="card-dev">
                    <img src={imageMarcos} alt="Marcos" className="img-team"/>
                    <h1>Marcos Ota</h1>
                    <h3>Contate-me</h3>
                    <div className="info-person">
                        <a href="https://github.com/MarcosOta123">
                            <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/marcos-ota-364214194/">
                            <img src="https://img.icons8.com/material-outlined/24/000000/linkedin--v1.png" alt="Linkedin"/>
                        </a>
                        <a href="https://www.instagram.com/mar_ota_/">
                            <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" alt="Instagram"/>
                        </a>
                        <a href="mailto:marcosota@gmail.com">
                            <img src="https://img.icons8.com/material-outlined/24/000000/gmail-login.png" alt="E-mail"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
