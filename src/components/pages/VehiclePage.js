import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer"

import vech1 from '../pics/vehicalList/1.avif'; 
import vech2 from '../pics/vehicalList/2.avif'; 
import vech3 from '../pics/vehicalList/3.avif';
import vech4 from '../pics/vehicalList/4.avif';
import vech5 from '../pics/vehicalList/5.avif';
import vech6 from '../pics/vehicalList/6.avif';
import vech7 from '../pics/vehicalList/7.avif';
import vech8 from '../pics/vehicalList/8.avif';

import vech9 from '../pics/vehicalList/9.avif';
import vech10 from '../pics/vehicalList/10.avif';
import vech11 from '../pics/vehicalList/11.avif';
import vech12 from '../pics/vehicalList/12.avif';

const VehiclePage = () => { 

    const vechList = [
        { name: 'MINI Hardtop', carImg: vech1, price: '$32,000', desName: 'MINI Electric Hardtop'},
        { name: 'Ford Maverick', carImg: vech2, price: '$25,100', desName: 'Ford Maverick'},
        { name: 'Ford Ranger', carImg: vech3, price: '$38,150', desName: 'Ford Ranger'},
        { name: 'Mercedes GLC', carImg: vech4, price: '$42,000', desName: 'Mercedes GLC'},
        { name: 'Mercedes SL', carImg: vech5, price: '$122,000', desName: 'Mercedes SL'},
        { name: 'Mercedes G-Class', carImg: vech6, price: '$12,000', desName: 'Mercedes G-Class'},
        { name: 'Mitsubishi Outlander', carImg: vech7, price: '$27,000', desName: 'Mitsubishi Outlander'},
        { name: 'Mitsubishi Mirage', carImg: vech8, price: '$17,000', desName: 'Mitsubishi Mirage'},
    ]

    const vechList2 = [
        { name: 'Lexus GX', carImg: vech9, price: '$64,200', desName: 'Lexus GX'},
        { name: 'Lexus IS', carImg: vech10, price: '$44,200', desName: 'Lexus IS'},
        { name: 'Mazda3', carImg: vech11, price: '$25,550', desName: 'Mazda3'},
        { name: 'Mazda Miata', carImg: vech4, price: '$30,000', desName: 'Mazda Miata'},
    ]

    return(
        <>
        {/* Navbar */}
        <NavBarHead></NavBarHead>

        <div className="infoCon vehicleCon">

            <h3>We Got Them All</h3>

            <div className="vech-container">
                <div className="vech-grid-container">
                    {vechList.map((vech, index) => (
                        <div key={index} className="vech-grid-item">
                            <img src={vech.carImg} alt={vech.desName} />
                            <p><a>{vech.name}</a> &nbsp;|&nbsp; <a>{vech.price}</a></p>
                            <button>More Info</button>
                        </div>
                    ))}
                </div>
            </div>

            <h3>Your Choice</h3>

            <div className="vech-container">
                <div className="vech-grid-container">
                    {vechList2.map((vech, index) => (
                        <div key={index} className="vech-grid-item">
                            <img src={vech.carImg} alt={vech.desName} />
                            <p><a>{vech.name}</a> &nbsp;|&nbsp; <a>{vech.price}</a></p>
                            <button>More Info</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <FooterNav></FooterNav>
        </>
    )

}

export default VehiclePage;