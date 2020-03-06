import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

const Contato = () => {
    return (
        <Container className="contato">
            <h2 id="contato" className="mb-4">Contato</h2>
                <Form action="https://formspree.io/xlenakyq" method="POST">
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" />
                        </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="email@email.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Digite o conteúdo da mensagem" />
                    </Form.Group>
                    <button type="submit" className="btn btn-block btn-main">
                        Enviar
                    </button>
                </Form>
        </Container>
    )
}

export default Contato;