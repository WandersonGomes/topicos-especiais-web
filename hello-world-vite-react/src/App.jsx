import React from 'react';
import Carro from './components/Carro';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef(null);
  }

  render() {
    return (
      <>
        <div className='App'>
          <Carro ref={this.containerRef} potencia={150} ano={2022} marca="Exemplo" cor="Azul" />
        </div>
      </>
    );
  }
};

export default App;
