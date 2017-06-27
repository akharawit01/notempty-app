import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default App;
