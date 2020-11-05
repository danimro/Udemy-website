import React, {Component} from 'react';
import Header from '../common/Header';
import image from "../assets/image/header-bg.jpg";

//Re-usable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import PortfolioItem from '../common/PortfolioItem';

class Home extends Component{
    render() {
        return (
             <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    showButton={true}
                    link="/services"
                    image={image} />
                <Services />
                <Portfolio />
             </div>
        );
    }
}

export default Home;