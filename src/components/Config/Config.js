import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthProvider';

import './Config.css';

const Config = () => {
    const nameUserRef = useRef();
    const photoUserRef = useRef();
    const { updateUserProfile, currentUser } = useAuth();
    const [loading, setLoading] = useState(false);

    const displayName = currentUser.displayName;
    const photoUrl = currentUser.photoURL;

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          setLoading(true);
          await updateUserProfile(nameUserRef.current.value, photoUserRef.current.value);
        } 
        catch {
          console.log("Erro atualizando o perfil!");
        }
        setLoading(false);
    }

    function handleConfig() {
        console.log(currentUser);
    }

    return(
        <div>
            <div className="page-header">
                <div>
                    <h1>Configurações</h1>
                    <small>Atualizar informações de login</small>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>Nome</label>
                    <input type="text" id="nameAndLastnameUser" ref={nameUserRef} placeholder="Nome e sobrenome" required defaultValue={displayName}/>
                </div>
                <div className="row">
                    <label>Foto de perfil</label>
                    <input type="text" id="linkPhotoUser" ref={photoUserRef} placeholder="Link da foto" defaultValue={photoUrl}/>
                </div>
                <div className="row">
                    <button type="submit" id="buttonConfig" disabled={loading}>
                        Salvar
                    </button>
                </div>
                <div className="row">
                    <button type="button" id="buttonConfig" onClick={handleConfig}>
                        Config
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Config;



