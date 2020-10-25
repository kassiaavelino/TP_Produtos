import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';

export default class Login extends Component {
 
    render() {
        
        return(
            <div className="login-page">
                <h1>PAGE LOGIN</h1>
                <button className="button">
                    <Link to='/cadastro'>Cadastro</Link>
                </button>
                
            </div>
        )
    };
}
