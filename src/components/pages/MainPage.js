import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer"
import t1 from "../pics/t1.jpg"
import t2 from "../pics/t2.jpg"
import t3 from "../pics/t3.jpg"
import t4 from "../pics/t4.jpg"

import bmwLogo from '../pics/carLogo/BMW.avif'; 
import audiLogo from '../pics/carLogo/Audi.avif'; 
import dodgeLogo from '../pics/carLogo/Dodge.avif'; 
import fordLogo from '../pics/carLogo/Ford.avif'; 
import mercedesBenzLogo from '../pics/carLogo/Mercedes-Benz.avif'; 
import subaruLogo from '../pics/carLogo/Subaru.avif'; 
import gmcLogo from '../pics/carLogo/GMC.avif'; 
import hondaLogo from '../pics/carLogo/Honda.avif'; 
import hyundaiLogo from '../pics/carLogo/Hyundai.avif'; 
import infinitiLogo from '../pics/carLogo/INFINITI.avif'; 
import jaguarLogo from '../pics/carLogo/Jaguar.avif'; 
import jeepLogo from '../pics/carLogo/Jeep.avif'; 
import kiaLogo from '../pics/carLogo/Kia.avif'; 
import landRoverLogo from '../pics/carLogo/Land_Rover.avif'; 
import lexusLogo from '../pics/carLogo/Lexus.avif'; 
import lincolnLogo from '../pics/carLogo/Lincoln.avif'; 
import maseratiLogo from '../pics/carLogo/Maserati.avif'; 
import mazdaLogo from '../pics/carLogo/Mazda.avif'; 

import carlogo1 from '../pics/cars/1.png';
import budgetlogo from '../pics/items/pngegg.png'
import repairlogo from '../pics/items/2.png'
import selllogo from '../pics/items/3.png'

import dealImg1 from '../pics/bestDeals/1.avif'
import dealImg2 from '../pics/bestDeals/2.avif'
import dealImg3 from '../pics/bestDeals/3.avif'
import dealImg4 from '../pics/bestDeals/4.avif'
import dealImg5 from '../pics/bestDeals/5.avif'
import dealImg6 from '../pics/bestDeals/6.avif'

import cata1 from '../pics/cata/1.avif'
import cata2 from '../pics/cata/2.avif'
import cata3 from '../pics/cata/3.avif'
import cata4 from '../pics/cata/4.avif'
import cata5 from '../pics/cata/5.avif'
import cata6 from '../pics/cata/6.avif'

import contentImg from '../pics/content/1.png'

const MainPage = () => { 

    const carBrands = [
        { name: 'BMW', logo: bmwLogo },
        { name: 'Audi', logo: audiLogo },
        { name: 'Dodge', logo: dodgeLogo },
        { name: 'Mercedes Benz', logo: mercedesBenzLogo },
        { name: 'Subaru', logo: subaruLogo },
        { name: 'Ford', logo: fordLogo },
        { name: 'GMC', logo: gmcLogo },
        { name: 'Honda', logo: hondaLogo },
        { name: 'Hyundai', logo: hyundaiLogo },
        { name: 'INFINITI', logo: infinitiLogo },
        { name: 'Jaguar', logo: jaguarLogo },
        { name: 'Jeep', logo: jeepLogo },
        { name: 'Kia', logo: kiaLogo },
        { name: 'Land Rover', logo: landRoverLogo },
        { name: 'Lexus', logo: lexusLogo },
        { name: 'Lincoln', logo: lincolnLogo },
        { name: 'Maserati', logo: maseratiLogo },
        { name: 'Mazda', logo: mazdaLogo },
    ];

    const bestDeals = [
        { name: 'BMW 4 Series', carImg: dealImg1, price: '$320,0000', desName: 'BMW Series 4', logo: bmwLogo },
        { name: 'Audi A7', carImg: dealImg2, price: '$73,0000', desName: 'Audi A7', logo: audiLogo },
        { name: 'Maserati MC20', carImg: dealImg3, price: '$159,999', desName: 'MC20', logo: maseratiLogo },
        { name: 'Dodge Challenger', carImg: dealImg4, price: '$34.395', desName: 'Challenger', logo: dodgeLogo },
        { name: 'Jaguar F-TYPE', carImg: dealImg5, price: '$80,200', desName: 'Jaguar', logo: jaguarLogo },
        { name: 'Chevrolet Camaro', carImg: dealImg6, price: '$20,200', desName: 'Chevrolet', logo: jaguarLogo },
    ]

    const cataVech = [
        { name: 'Off Road', cataImg: cata1 },
        { name: 'Sedan', cataImg: cata2 },
        { name: 'Van', cataImg: cata3 },
        { name: 'Truck', cataImg: cata4 },
        { name: 'Hybrid', cataImg: cata5 },
        { name: 'Coupes', cataImg: cata6 },
    ]
  
    return (
        <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            {/* Intro */}
            <div className="introCon">
                <img src={t3}></img>
                <h1>AutoTraders</h1>
                <p>Finest There Is!</p>
            </div>

            {/* brands */}
            <div className="brandsCon">
                <h3>All Brands Available</h3>

                <div className="brandsConBox">
                    <div className="grid-container">
                        {carBrands.map((brand, index) => (
                            <div key={index} className="grid-item">
                            <img src={brand.logo} alt={brand.name} />
                            <p>{brand.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* features */}
            <div className="infoCon">
                <h3>Available Services</h3>

                <div className="infoContainer">
                    <div className="wrapper">
                        <div className="container">
                            <div className="card">
                                <img src={carlogo1} alt="Car" className="image" />
                                <h2>Find your ride</h2>
                                <p>Not sure what you want? We have all kinds of cars you could want explore with us.</p>
                                <button>Browse</button>
                            </div>
                            <div className="card">
                                <img src={budgetlogo} alt="Piggy Bank" className="image" />
                                <h2>Shop by budget</h2>
                                <p>We have all kinds of cars for all kinds of budgets.</p>
                                <button>Check Budget</button>
                            </div>
                            <div className="card">
                                <img src={repairlogo} alt="Car" className="image" />
                                <h2>Repair your vehicle</h2>
                                <p>We provide mechanical service for a variety of cars and bikes. </p>
                                <button>Repair</button>
                            </div>
                            <div className="card">
                                <img src={selllogo} alt="Piggy Bank" className="image" />
                                <h2>Sell your vehicle</h2>
                                <p>A space where you can sell your vehicle. Post and find the best price for you.</p>
                                <button>Sell right now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content ban */}
            <div className="contentBan">
                <div className="ban1">
                    <h3>We Are Here For You</h3>
                    <p>Customer satisfaction is our top priority because it builds lasting relationships and fosters loyalty. By prioritizing consumer 
                        wishes, we deliver products and services that exceed expectations, driving innovation and enhancing our reputation.</p>
                </div>
                <div className="ban2">
                    <img src={contentImg}></img>
                </div>
            </div>

            {/* best deals out now*/}
            <div className="infoCon bestCarCon">
                <h3>Best Deals</h3>

                <div className="deal-container">
                    <div className="deal-grid-container">
                        {bestDeals.map((deal, index) => (
                            <div key={index} className="deal-grid-item">
                                <img src={deal.carImg} alt={deal.desName} />
                                <p><a>{deal.name}</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a>{deal.price}</a></p>
                                <button>More Info</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Catagories */}
            <div className="infoCon bestCarCon">
                <h3>Catagories</h3>

                <div className="deal-container">
                    <div className="deal-grid-container">
                        {cataVech.map((cata, index) => (
                            <div key={index} className="cata-grid-item">
                                <div className="image-container">
                                    <img src={cata.cataImg} alt={cata.name} />
                                    <div className="hover-text">{cata.name}</div>
                                </div>
                            </div>   
                        ))}
                    </div>
                </div>
            </div>

            {/* footer */}
            <FooterNav></FooterNav>
        </div>  
        </>
    )
}

export default MainPage;