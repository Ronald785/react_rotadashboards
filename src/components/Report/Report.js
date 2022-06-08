import React from 'react';
import './Report.css';

const Report = () => {
    return (
        <div className="Report">
            <div className="page-header">
                <div>
                    <h1>Entrar em contato</h1>
                    <p>Formulário para realizar contato com os desenvolvedores, seja para fazer sugestão, reclamação ou reportar um erro</p>
                </div>
            </div>

            <div>
                <form>
                    <div className="row">
                        <label for="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Nome e sobrenome" required />
                    </div>

                    <div className="row">
                        <label for="tel">Telefone</label>
                        <input type="tel" name="tel" id="tel" placeholder="19912365478" required />
                    </div>

                    <div className="row">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="fulano@gmail.com" required />
                    </div>

                    <div className="row">
                        <label for="reason">Motivo de contato</label>
                        <select name="reason" id="reason">
                            <option value="duv">Dúvida</option>
                            <option value="sug">Sugestão</option>
                            <option value="rec">Reclamação</option>
                            <option value="loc">Localização</option>
                        </select>
                    </div>

                    <div className="row">
                        <label for="comment">Comentários gerais</label>
                        <textarea name="comment" id="comment" cols="30" rows="5">
                        </textarea>
                    </div>

                    <div className="row">
                        <button type="submit">Reportar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Report;
