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
                    <input type="text" id="nameAndLastnameUser" placeholder="Nome e sobrenome" required />
                </div>
                <div className="row">
                    <label for="name">Foto de perfil</label>
                    <input type="text" id="linkPhotoUser" placeholder="Nome e sobrenome" />
                </div>
                <div className="row">
                    <label for="name">CPF</label>
                    <input type="text" id="cpfUser" disabled/>
                </div>
                <div className="row">
                    <label for="name">Idade</label>
                    <input type="number" id="ageUser" placeholder="Idade" min="18" required />
                </div>
                <div className="row">
                    <button type="submit" id="buttonConfig">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Config;

