import React, { useRef, useContext } from 'react';
import { DatabaseContext } from '../../context/DatabaseProvider';
import './Report.css';

const Report = () => {
    const firstNameRef = useRef();
    const lastnameRef = useRef();
    const telRef = useRef();
    const emailRef = useRef();
    const reasonRef = useRef();
    const textareaRef = useRef();

    const { addReport } = useContext(DatabaseContext);

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            firstName: firstNameRef.current.value,
            lastname: lastnameRef.current.value,
            telefone: telRef.current.value,
            email: emailRef.current.value,
            reason: reasonRef.current.value,
            text: textareaRef.current.value
        }

        try {
            await addReport(data);
        } 
        catch {
            console.log("Erro login!");
        }
    }

    return (
        <div className="Report">
            <div className="page-header">
                <div>
                    <h1>Entrar em contato</h1>
                    <small>Formulário para realizar contato com os desenvolvedores, seja para fazer sugestão, reclamação ou reportar um erro</small>
                </div>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <label htmlFor="firstNameReport">Nome</label>
                        <input type="text" id="firstNameReport" ref={firstNameRef} placeholder="Nome" required />
                    </div>

                    <div className="row">
                        <label htmlFor="lastNameReport">Sobrenome</label>
                        <input type="text" id="lastNameReport" ref={lastnameRef} placeholder="Sobrenome" required />
                    </div>

                    <div className="row">
                        <label htmlFor="telReport">Telefone</label>
                        <input type="number" id="telReport" ref={telRef} placeholder="19912365478" required />
                    </div>

                    <div className="row">
                        <label htmlFor="emailReport">E-mail</label>
                        <input type="email" id="emailReport" ref={emailRef} placeholder="fulano@gmail.com" required />
                    </div>

                    <div className="row">
                        <label htmlFor="reasonReport">Motivo de contato</label>
                        <select id="reasonReport" ref={reasonRef} required>
                            <option value="duvida">Dúvida</option>
                            <option value="sugestao">Sugestão</option>
                            <option value="reclamacao">Reclamação</option>
                        </select>
                    </div>

                    <div className="row">
                        <label htmlFor="comment">Comentários gerais</label>
                        <textarea name="comment" ref={textareaRef} id="commentReport" cols="30" rows="5" required>
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
