import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import Item1 from '../../images/item-1.jpg';

export default class Produtos extends Component {
 
    render() {
        
        return(
            <div className="products-main">
                <h1 className="title">Tela Produtos</h1>
                <div class="card">
                    <p className="image"><img className="itens" src={Item1} /></p>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="button-produtos">
                            <Link to='/produto-detalhes'>Mais detalhes</Link>
                        </button>
                    </div>
                </div>
                <button className="button">
                    <Link to='/'>primeira página</Link>
                </button>
                
            </div>
        )
    };
}
