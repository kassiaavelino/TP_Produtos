import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';

export default class Login extends Component {
 
    render() {
        
        return(
            <div className="login-page">
                <h1>PAGE LOGIN</h1>
                <div className="form-login">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email: </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Senha: </label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="button">Entrar</button>
                </form>
                </div>
                <hr />

                <button className="button">
                    <Link to='/cadastro'>Cadastro</Link>
                </button>
                
            </div>
        )
    };
}
