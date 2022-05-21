import React from "react";
import Logo from './assets/logo.webp'
import './App.css'

const App = () => {
    return (
        <div className="wrapper">
            <header className="logo"><img src={Logo} alt="backstage logo"/></header>
        </div>
    )
}

export default App;