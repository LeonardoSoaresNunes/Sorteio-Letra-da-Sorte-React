import React, { Component } from 'react';
import './style.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textMgm:''
    };
    
    this.Abrir= this.Abrir.bind(this);

    this.mgm = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

  }
  Abrir(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.mgm.length);
    state.textMgm = this.mgm[numeroAleatorio];
    this.setState(state);

  }


  render() {
    return (
      <div className="container">

        <Botao nome="Abrir Letra da Sorte" acaoBtn={this.Abrir}/>
        <h3 className="textFrase">{this.state.textMgm}</h3>

        

      </div>

    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>

        <button className="button" onClick={this.props.acaoBtn}>{this.props.nome}</button>

      </div>
    );
  }
}

export default App;





{/*  
function App(props) {
  return (
    <div>
   



      {/*Este é um COmntario em React   }
      {/* Parei no Modulo 5 aula 42 }
    </div>
  );
};
export default App;
 */}