import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainPage from '../containers/MainPage.jsx';
import BlockPage from '../containers/BlockPage.jsx';
import TransactionPage from '../containers/TransactionPage.jsx';
import BlockListPage from '../containers/BlockListPage.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg fixed-top navbar-dar bg-dark">
                        <div className="container">
                            <ul className="navbar-nav flex-row">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blocks" className="nav-link">Blocks</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <Route exact path="/" component={MainPage} />
                        <Route path="/block/:hash" component={BlockPage} />
                        <Route path="/transaction/:hash" component={TransactionPage} />

                        <Route exact path="/blocks" component={BlockListPage} />
                        <Route path="/blocks/:timestamp" component={BlockListPage} />
                    </div>
                </div>
            </Router >
        );
    }
}