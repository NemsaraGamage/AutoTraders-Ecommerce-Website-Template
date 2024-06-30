import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer"
import t1 from "../pics/t1.jpg"
import t2 from "../pics/t2.jpg"
import t3 from "../pics/t3.jpg"

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
                {/* <img src={t1}></img> */}
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

            {/* best cars out now*/}
            <div className="bestCarCon">
                <h3>Best Car Right Now</h3>
            </div>

            {/* footer */}
            <FooterNav></FooterNav>
        </div>  
        </>
    )
}

export default MainPage;