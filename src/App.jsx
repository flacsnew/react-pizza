import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import {
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <div className="wrapper">
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/" element={ <Home searchQuery={searchQuery} /> } />
                        <Route path="/cart" element={ <Cart /> } />
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;