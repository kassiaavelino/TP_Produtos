import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Main from './pages/main';
import Produtos from'./pages/produtos';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/produtos" component={Produtos} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </BrowserRouter>
)
export default Routes;