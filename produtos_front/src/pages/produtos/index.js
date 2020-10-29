import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import Item1 from '../../images/item-1.jpg';

export default class Produtos extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            produtos: [],
            erro: null
        };
    }
 
    componentDidMount() {
        fetch(`http://127.0.0.1:3003/sistema/produtos`)
            .then(produtos =>
                produtos.json().then(produtos => this.setState({ produtos }))
            )
            .catch(erro => this.setState({ erro }));
    } 
    render() {
        const { produtos } = this.state;
        return(
            <div className="products-main">
                <div>
                <h1 className="title">Tela Produtos</h1>
                {produtos.map((produtos, index) =>
                <div className="article">
                <div class="card">
                    <p className="image"><img className="itens" alt="img" src={Item1} /></p>
                    <div class="card-body">
                        <h5 class="card-title">{produtos.p_nome}</h5>
                        <p class="card-text">{produtos.p_detalhes}</p>
                        <p> <Link to={`/produtos/${produtos.p_id}`}> Acessar </Link> </p>
                    </div>
                </div>
                </div>
                )}
                </div>
                <button className="button">
                    <Link to='/'>primeira página</Link>
                </button>
                
            </div>
        )
    };
}