import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';
import Banner from './banner';
import Fact from './fact';
import Prevention from './prevention';
import MobileHeader from './mobile_header';

class Index extends Component {
    render() {
        return (
            <div>
            <Header />
            <main className="main-content">    
            <Banner />    
            <Fact />
            <Prevention />
            <Footer />
            </main>
            <MobileHeader />
            </div>
        )
    }
}

export default Index;