import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import GotoTop from './Component/BackToTop';
const Routing =()=>{
    return(
        <BrowserRouter>
        <div>
            <Header/>
             <Route exact path={'/'} component={Home}/>
             <GotoTop/>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default Routing;