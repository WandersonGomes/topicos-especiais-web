import {Component} from 'react';
import Transporte from './Transporte';

class Carro extends Component {
    constructor(props) {
        super(props);    
    }

    acelerar = () => {
        console.log('Carro acelerando!');
    };

    desacelera = () => {
        console.log('Carro desacelerando!');
    }

    render() {
        const { potencia, ano, marca, cor } = this.props;

        return (
            <div>
                <h1>Detalhes do Carro</h1>
                <Transporte
                    potencia={potencia}
                    ano={ano}
                    marca={marca}
                    cor={cor}
                    acelera={this.acelerar}
                    desacelera={this.desacelera}
                />
            </div>
        );
    }
}

export default Carro;