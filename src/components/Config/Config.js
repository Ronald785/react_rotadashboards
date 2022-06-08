import React from 'react';
import './Config.css';

const Config = () => {
    return(
        <div>
            <div className="page-header">
                <div>
                    <h1>Configurações</h1>
                    <small>Atualizar informações de login</small>
                </div>
            </div>

            <div>
                <div className="row">
                    <label for="name">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Nome e sobrenome" required />
                </div>
                <div className="row">
                    <label for="name">Foto de perfil'</label>
                    <input type="text" name="name" id="name" placeholder="Nome e sobrenome" required />
                </div>
            </div>
        </div>
    );
}

export default Config;

