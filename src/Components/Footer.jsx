import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMailUnread } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
    return (
        <>
            <section className="footer">
                <img src="https://ik.imagekit.io/uvsjit70p/shape1?updatedAt=1770105778395" className="w-100" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2">
                            <img src="https://ik.imagekit.io/j9af7werr/logo?updatedAt=1772359288302" alt="LOGO" className="w-75" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt cupiditate, assumenda quod reprehenderit consequatur aliquam!</p>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <h1>Company</h1>
                            <NavLink className="link" to="">Home</NavLink><br />
                            <NavLink className="link" to="">About Us</NavLink><br />
                            <NavLink className="link" to="">Our Team</NavLink><br />
                            <NavLink className="link" to="">Careers</NavLink><br />
                            <NavLink className="link" to="">Privacy Policy</NavLink><br />
                            <NavLink className="link" to="">Terms & Conditions</NavLink>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <h1>Support</h1>
                            <NavLink className="link" to="">Contact Us</NavLink><br />
                            <NavLink className="link" to="">FAQ</NavLink><br />
                            <NavLink className="link" to="">Booking Guide</NavLink><br />
                            <NavLink className="link" to="">Cancellation Policy</NavLink><br />
                            <NavLink className="link" to="">Help Center</NavLink><br />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <h1>Contact Info</h1>
                            <p><FaPhone /> Phone: +97430978769</p>
                            <p><IoMailUnread /> Mail: info@travelzoneglobal.com</p>
                            <p><IoLocationSharp /> 333 road, broklyn street new york</p>
                            <div className="box">
                                <NavLink className="icon" to=""><FaFacebook /></NavLink>
                                <NavLink className="icon" to=""><RiInstagramFill /></NavLink>
                                <NavLink className="icon" to=""><SiYoutube /></NavLink>
                                <NavLink className="icon" to=""><AiFillTikTok /></NavLink>
                                <NavLink className="icon" to=""><IoLogoWhatsapp /></NavLink>
                                <NavLink className="icon" to=""><IoMailUnread /></NavLink>
                            </div>
                        </div>
                    </div><hr />
                    <div className="d-flex justify-content-between">
                        <p>Compare and book cheap flights with Travel Zone Global</p>
                        <p>© Travel Zone Global Ltd 2002 – 2026</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer