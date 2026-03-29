import React, { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { GiCommercialAirplane } from "react-icons/gi";
import { RiHotelBedFill } from "react-icons/ri";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { PiTreePalmBold } from "react-icons/pi";
const NavBar = () => {
    const location = useLocation();
    const navbarRef = useRef(null);
    useEffect(() => {
        const navbarCollapse = navbarRef.current;
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    }, [location]);
    return (
        <>
            <center><img src="https://ik.imagekit.io/j9af7werr/logo?updatedAt=1772359288302" className='topimg d-block d-sm-none' /></center>
            <nav className="navbar navbar-expand-lg d-none d-sm-block">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Travel Zone Global</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* ref={navbarRef} yahan lagaya gaya hai */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarRef}>
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/"><GiCommercialAirplane /> Flights</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Hotel"> <RiHotelBedFill /> Hotel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Visa'> <FaBuildingCircleCheck /> Visa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Holidays'> <PiTreePalmBold /> Holidays</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">GET STARTED</button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Offcanvas (Isay close karne ke liye bootstrap data-bs-dismiss hi best hai) */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Welcome to Travel Zone Global</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique sapiente quibusdam eos molestias, aperiam blanditiis repellendus esse saepe. Eum necessitatibus commodi quos ipsum illum provident eius et amet numquam unde recusandae delectus sunt cupiditate atque labore, ea perferendis aliquam? Eaque labore velit corrupti recusandae quo quaerat repudiandae repellat amet ipsa asperiores? Ullam tenetur eum error blanditiis molestias voluptatum corrupti, eaque rerum saepe! Dolorem nihil amet tempora! Fugiat repellendus error amet similique commodi facilis, ad aut eveniet ab modi quos id quasi doloribus eligendi et quis mollitia sunt quod iure! Corrupti quas voluptatum, eligendi et sapiente adipisci illum velit ipsam quibusdam.</p>
                </div>
            </div>
            <div className="nav d-flex justify-content-around d-block d-sm-none">
                <NavLink to="/" className="link"><GiCommercialAirplane /> &nbsp; Flights</NavLink>
                <NavLink to="/Hotel" className="link"><RiHotelBedFill />&nbsp; Hotel</NavLink>
                <NavLink to="/Visa" className="link"><FaBuildingCircleCheck />&nbsp; Visa</NavLink>
                <NavLink to="/Holidays" className="link"><PiTreePalmBold />&nbsp;Holidays</NavLink>
            </div>
        </>
    )
}
export default NavBar