import React from "react"
import "./App.css";
// import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from "./Navbar";
import {Switch,Route, Redirect} from "react-router-dom";


const App = () => {
    return (
        <>
        
        <Navbar/>
        <div className="switch">
        <Switch>
            <Route exact path="/"component={Home}/>
            <Route exact path="/About"component={About}/>
            <Route exact path="/Services"component={Services}/>
            <Route exact path="/Contact"component={Contact}/>
            <Redirect to="/"/>


        
        </Switch>
        </div>
        <Home/>
        </>
    );
};

export default App;