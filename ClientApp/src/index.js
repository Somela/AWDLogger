import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Application from './components/Application';
import Contact from './components/Contact';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import './Stylesheets/Home.css';
import aig from './asserts/AIG_logo.png';
import { Link } from 'react-router-dom';
import history from './helper/history';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <Link className="navbar-brand font-bold" to="/"><img src={aig} alt="AIG" /></Link>
                    <Link className="navbar-brand font-bold" to="/contact">Contact</Link>
                    <form className="form">
                        <div className="input-group">
                            <input type="text" className="form-control form-control-sm spacing" placeholder="Search" />
                            <button className="btn btn-sm btn-success spacing " type="button">Search</button>
                        </div>
                    </form>
                </nav>
                <hr />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/application/:appID" component={Application} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);

registerServiceWorker();