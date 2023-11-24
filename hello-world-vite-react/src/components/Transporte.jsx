import { Component, createRef } from 'react';
import '../styles/Transporte.css';

class Transporte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            velocidade: 0,
        };
        this.elementRef = createRef(null);
    }

    handleAcelera = () => {
        this.setState((prevState) => ({
            velocidade: prevState.velocidade + 10,
        }));
        this.props.acelera(this.elementRef);
    }

    handleDesacelera = () => {
        this.setState((prevState) => {if (prevState.velocidade > 0) return { velocidade: prevState.velocidade - 10 }});
    
        this.props.desacelera(this.elementRef);
    }

    render() {
        const { potencia, ano, marca, cor } = this.props;
        const { velocidade } = this.state;

        return (
            <div ref={this.elementRef}>
                <h2>Detalhes do Transporte</h2>
                <p>Potência: {potencia}</p>
                <p>Ano: {ano}</p>
                <p>Marca: {marca}</p>
                <p>Cor: {cor}</p>
                <p>Velocidade: {velocidade} km/h</p>
                <button ref={this.elementRef} onClick={this.handleAcelera}>Acelerar</button>
                <button ref={this.elementRef} onClick={this.handleDesacelera}>Desacelerar</button>
            </div>
        );
    }
}

export default Transporte;