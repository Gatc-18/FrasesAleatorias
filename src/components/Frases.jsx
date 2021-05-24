import React, { Component } from 'react';
import dbFrases from '../data/dbFrases';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap';
import {
    Contenedor,
    H1Styled,
    CajaContenedora,
    H2Styled,
    ButtonQuote,
    ButtonQuotee,
    ImagenTwitter

} from '../styles/Styled'


class Frases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            frase: "",
            pelicula: "",
            color: ""
        }
    }


    cambiarFrase = () => {
        const numAleatorio = Math.round(Math.random() * 30)
        this.setState({
            color: dbFrases[numAleatorio]["color"],
            frase: dbFrases[numAleatorio]["frase"],
            pelicula: dbFrases[numAleatorio]["pelicula"]
        })
    }


    componentDidMount() {
        this.cambiarFrase();
    }

    render() {
        return (
            <Contenedor id="quote-box" style={{ backgroundColor: `${this.state.color}`, color: `${this.state.color}` }}>

                <CajaContenedora>

                    <H1Styled id="text"><FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "10px" }} />{this.state.frase}</H1Styled>
                    <H2Styled id="author">{this.state.pelicula}</H2Styled>
                    <Row>
                        <Col xs={6}>
                            <ButtonQuotee className="btn" id="tweet-quote" style={{ backgroundColor: `${this.state.color}` }} href={`https://twitter.com/intent/tweet/?text="${this.state.frase}${this.state.pelicula}`} target="_blanck"><ImagenTwitter src="https://i.ibb.co/7RgdVpC/twitter.png" alt="twitter" border="0" /></ButtonQuotee>
                        </Col>
                        <Col xs={6}>
                            <ButtonQuote className="btn" size="sm" style={{ backgroundColor: `${this.state.color}`, boxShadow: "none" }} onClick={this.cambiarFrase}>new</ButtonQuote>
                        </Col>
                    </Row>
                </CajaContenedora>

            </Contenedor>
        )
    }
}

export default Frases