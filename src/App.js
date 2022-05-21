import React from "react";
import Logo from './assets/logo.webp'
import BookList from "./components/BookList/BookList";
import './App.css'

const App = () => {
    return (
        <div className="wrapper">
            <header className="logo"><img src={Logo} alt="backstage logo"/></header>
            <BookList />
        </div>

    )
}

export default App;