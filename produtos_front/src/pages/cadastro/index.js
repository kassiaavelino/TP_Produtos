import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
        usuario: {
            nome: "",
            email: "",
            senha: "",
            endereco: "",
            cidade:"",
            estado:"",
            cep:""
        },
        erro: null,
        redirect: false
    };
}

exibeErro() {
    const { erro } = this.state;

    if (erro) {
        return (
            <div className="alert alert-danger" role="alert">
                Erro de conexão com o servidor
            </div>
        );
    }
}

 
    render() {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to="/produtos" />
      }else {        
        return(
            <div className="register-page">
                <h1>PAGE CADASTRO</h1>
                
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="inputAddress2">Nome: </label>
                    <input type="text" 
                           class="form-control" 
                           id="inputAddress2"
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email: </label>
                      <input type="email" 
                             class="form-control" 
                             id="inputEmail4"/>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Senha: </label>
                      <input type="password" 
                             class="form-control" 
                             id="inputPassword4"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Endereço: </label>
                    <input type="text" 
                           class="form-control" 
                           id="inputAddress" 
                           placeholder="Ex.: Rua Nova Esperança 398"/>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">Cidade: </label>
                      <input type="text" 
                             class="form-control" 
                             id="inputCity"/>
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">Estado: </label>
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>GO</option>
                        <option>MT</option>
                        <option>MG</option>
                        <option>RJ</option>
                        <option>SC</option>
                        <option>SP</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputZip">CEP :</label>
                      <input type="text" 
                             class="form-control" 
                             id="inputZip"/>
                    </div>
                  </div>
                  <button type="submit" class="button"><Link to='/login'>Login</Link></button>
                </form>
                
            </div>
        )
      }
    };

    handleInputChange = event => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState(prevState => ({
          usuario: { ...prevState.usuario, [name]: value }
      }));
      console.log(value);
  };

  handleSubmit = event => {
      fetch("http://localhost:3003/sistema/usuarios", {
          method: "post",
          body: JSON.stringify(this.state.usuario),
          headers: {
              "Content-Type": "application/json"
          }
      })
          .then(data => {
              if (data.ok) {
                  this.setState({ redirect: true });
              } else {
                  data.json().then(data => {
                      if (data.error) {
                          this.setState({ erro: data.error });
                      }
                  });
              }
          })
          .catch(erro => this.setState({ erro: erro }));

      event.preventDefault();
  };

}

export default Cadastro;