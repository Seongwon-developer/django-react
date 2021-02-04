import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import RommJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { 
    BrowserRouter as Router, 
    Switch, Route, 
    Link, Redirect 
} from "react-router-dom";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return <Router>
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/join' component={RommJoinPage}></Route>
                <Route path='/create' component={CreateRoomPage}></Route>
            </Switch>

        </Router>
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

