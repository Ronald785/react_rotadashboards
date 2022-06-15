import React from 'react';
import './Report.css';

const Report = () => {
    return (
        <div className="Report">
            <div className="page-header">
                <div>
                    <h1>Entrar em contato</h1>
                    <small>Formulário para realizar contato com os desenvolvedores, seja para fazer sugestão, reclamação ou reportar um erro</small>
                </div>
            </div>

            <div>
                <form>
                    <div className="row">
                        <label for="firstNameReport">Nome</label>
                        <input type="text" id="firstNameReport" placeholder="Nome" required />
                    </div>

                    <div className="row">
                        <label for="lastNameReport">Sobrenome</label>
                        <input type="text" id="lastNameReport" placeholder="Sobrenome" required />
                    </div>

                    <div className="row">
                        <label for="telReport">Telefone</label>
                        <input type="number" id="telReport" placeholder="19912365478" />
                    </div>

                    <div className="row">
                        <label for="emailReport">E-mail</label>
                        <input type="email" id="emailReport" placeholder="fulano@gmail.com" required />
                    </div>

                    <div className="row">
                        <label for="reasonReport">Motivo de contato</label>
                        <select id="reasonReport">
                            <option value="duv">Dúvida</option>
                            <option value="sug">Sugestão</option>
                            <option value="rec">Reclamação</option>
                            <option value="loc">Localização</option>
                        </select>
                    </div>

                    <div className="row">
                        <label for="comment">Comentários gerais</label>
                        <textarea name="comment" id="commentReport" cols="30" rows="5">
                        </textarea>
                    </div>

                    <div className="row">
                        <button type="submit" id="buttonReport">Reportar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Report;
