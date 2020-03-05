import React from 'react'

const Contato = () => {
    return (
        <div className="container contato">
            <h2 id="contato" className="mb-4">Contato</h2>
            <form method="post" action="https://formspree.io/xlenakyq">

                <div className="form-group row">
                    <div className="col-12">
                    <label to="nome">Nome</label>
                         <input className="form-control form-control-lg" id="nome" type="text" name="nome" required />
                    </div>
                </div>
                <div className="form-group">
                    <label to="email">Email</label>   
                        <input type="email" className="form-control form-control-lg" id="email" name="email" 
                        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required />
     
                </div>
                <div className="form-group">
                <label to="message">Message</label>
                <textarea type="text" className="form-control form-control-lg" id="message" name="message" rows="3" required></textarea>

                </div>

            
            <button type="submit" className="btn btn-block btn-main">
                Enviar
            </button>

        </form>
        </div>
    )
}

export default Contato;