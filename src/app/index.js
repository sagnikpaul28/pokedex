import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from './components/Home';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    {/*<Route component="Error" />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}

render(<App/>, document.getElementsByClassName('app')[0]);