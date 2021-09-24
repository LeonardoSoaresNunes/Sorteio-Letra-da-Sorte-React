import React, { Component } from 'react';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feeed:[
                {id: 1 , username:'Leonardo Nunes', curtidas:10 , comentarios:2},
                {id: 2 , username:'Ingrid Emanuelle', curtidas:1000 , comentarios:100000},
                {id: 3 , username: 'David' , curtidas :9999 , comentarios:1000000},
                {id: 4 , username: 'Jonathan' , curtidas :9990 , comentarios:10000001},
            ]
           

        };
    
    }

    render() {
        return (
            <div>
           {this.state.feeed.map((item)=>{
               return(
                   <div key={item.id}>
                       <h3>{item.username}</h3>
                       <a>{item.curtidas} Curtidas / 
                       {item.comentarios} Comentários </a>
                   </div>

               );
           })}
      

            </div>
        );
    }

}

export default Membro;