import React from 'react';
import { Switch, Route} from 'react-router-dom';

import ListaContatos from '../pages/ListaContatos';
import CadastroPessoa from '../pages/CadastroPessoa';
import AdicionaContato from '../pages/AdicionaContato';
import VisualizaContato from '../pages/VisualizaContato';
import EditaContato from '../pages/EditaContato';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={ListaContatos} />
        <Route path="/cadastro" component={CadastroPessoa} />
        <Route path="/adicionaContato" component={AdicionaContato} />
        <Route path="/visualizaContato" component={VisualizaContato} />
        <Route path="/editaContato/:person_id" component={EditaContato} />
    </Switch>
)

export default Routes;