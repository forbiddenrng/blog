import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import About from './components/About'
import "./App.css"
// const About = () => <h1>O nas</h1>
const Travels = () => <h1>Podróże</h1>
const Add = () => <h1>Dodaj swoją podróż</h1>
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <nav>
            <ul>
              <li><NavLink to="/">Strona główna</NavLink></li>
              <li><NavLink to="/travels">Podróże</NavLink></li>
              <li><NavLink to="/add">Dodaj</NavLink></li>
            </ul>
          </nav>
          <section>
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route path="/travels">
                <Travels />
              </Route>
              <Route path="/add">
                <Add />
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
