import React from 'react'
import { NavLink } from 'react-router-dom'
import { PopularTours } from '../data/MapData'
import { TopTrending } from '../data/MapData'
import PopularDestinations from '../Components/PopularDestinations'
import Testimonials from '../Components/Testimonials'
const Home = () => {
    return (
        <>
            <section className="home1">
                <div className="container">
                    <h1>Expert Visa Assistance Your Gateway to the World.</h1>
                    <p>Navigating visa regulations can be complex. At Travel Zone Global, we simplify the process with a 98% approval success rate. From documentation to appointment booking, we handle the hard work while you plan your trip.</p>
                    <a href="https://wa.me/97430978769" className='link'>Get Free Consultation</a>
                </div>
            </section>
            <section className="home2">
                <div className="container">
                    <h1 data-aos="fade-up">Exclusive Offers & Unmatched Value</h1>
                    <p data-aos="fade-up">We negotiate directly with airlines and hotels to bring you <b>Offline-Only</b> rates. From luxury staycations in Doha to last-minute international flight discounts, our exclusive deals are designed to save you more. Message us to unlock today’s secret rates!</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/j9af7werr/1?updatedAt=1772301479737" className="img-thumbnail" />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/j9af7werr/3?updatedAt=1772301480458" className="img-thumbnail" />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/j9af7werr/4?updatedAt=1772301480282" className="img-thumbnail" />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/j9af7werr/2?updatedAt=1772301480270" className="img-thumbnail" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home5">
                <div className="container">
                    <div className="row">
                        <h6 data-aos="fade-up">Our Expert Services</h6>
                        <h1 data-aos="fade-up">COMPREHENSIVE TRAVEL AND VISA SOLUTIONS</h1>
                        <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="box">
                                <h3>Visa Consultation</h3>
                                <p>Expert Guidance For All Types Of Visas Tourist, Student, Business, Or Family. We Handle Documentation, Application Submission, And Embassy Compliance To Ensure A Smooth Approval Process.</p>
                                <a href="https://wa.me/97430978769" target='_blank' className='link'>Chat Now</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="box">
                                <h3>Air Ticket Booking</h3>
                                <p>Convenient And Affordable Flight Bookings For Both Domestic And International Travel. We Provide Multiple Airline Options, Best Rates, And Flexible Schedules Tailored To Your Itinerary.</p>
                                <a href="https://wa.me/97430978769" target='_blank' className='link'>Chat Now</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="box">
                                <h3>Tour Packages</h3>
                                <p>Carefully Curated Travel Packages For Leisure, Adventure, And Cultural Exploration. We Handle Itineraries, Accommodation, Sightseeing, And Local Experiences For A Hassle-Free Vacation.</p>
                                <a href="https://wa.me/97430978769" target='_blank' className='link'>Chat Now</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="box">
                                <h3>Hotels & Transport</h3>
                                <p>Comfortable Hotel Bookings And Reliable Transportation Services For Your Entire Trip. We Ensure Quality Stays And Safe, Timely Travel Between Destinations For A Smooth Journey.</p>
                                <a href="https://wa.me/97430978769" target='_blank' className='link'>Chat Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopularDestinations />
            <section className="home3">
                <div className="container">
                    <div className="content">
                        <h1 data-aos="fade-up">Find Popular Tours</h1>
                        <p data-aos="fade-up">Choose from carefully crafted tour packages including city tours, desert safaris, island escapes, cruise trips, cultural explorations, and adventure experiences. We customize every tour according to your travel dates and interests.</p>
                    </div>
                    <div className="row">
                        {PopularTours.map((data) => (
                            <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch" key={data.id} data-aos="fade-up">
                                <div className="card">
                                    <img src={data.img} className='img-fluid img-thumbnail' />
                                    <div className="card-body">
                                        <NavLink className="link" to={data.link}><h5>{data.h3}</h5></NavLink>
                                        <p>{data.p}</p>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <p>{data.left}</p>
                                            <p>From <b>{data.right}</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="home4">
                <section className="container">
                    {/* Header Section */}
                    <h1 data-aos="fade-up">Popular things to do</h1>
                    <p data-aos="fade-up">Enhance your journey with exciting activities and unique experiences across top destinations. From thrilling adventures to relaxing sightseeing tours, we ensure every moment of your holiday is memorable.</p>
                    {/* Gallery Grid */}
                    <div className="row g-3">
                        {/* Left Column */}
                        <div className="col-md-3 d-flex flex-column g-3" data-aos="fade-up">
                            <div className="position-relative mb-3 flex-grow-1 overflow-hidden rounded-4 shadow-sm" style={{ height: '200px' }}>
                                <img src="https://ik.imagekit.io/j9af7werr/Popular%20things/Desert?updatedAt=1772618709259" className="w-100 h-100 object-fit-cover" alt="Cruises" />
                                <div className="position-absolute bottom-0 start-0 p-3 text-white fw-bold w-100 bg-dark bg-opacity-25">Desert Safari</div>
                            </div>
                            <div className="position-relative overflow-hidden rounded-4 shadow-sm" style={{ height: '200px' }} data-aos="fade-up">
                                <img src="https://ik.imagekit.io/j9af7werr/Popular%20things/Dhow?updatedAt=1772618709791" className="w-100 h-100 object-fit-cover" alt="Museum" />
                                <div className="position-absolute bottom-0 start-0 p-3 text-white fw-bold w-100 bg-dark bg-opacity-25">Dhow Cruise</div>
                            </div>
                        </div>
                        {/* Center Tall Image */}
                        <div className="col-md-4" data-aos="fade-up" style={{ height: '500px' }}>
                            <div className="position-relative h-100 overflow-hidden rounded-4 shadow-sm">
                                <img src="https://ik.imagekit.io/j9af7werr/Popular%20things/Beach?updatedAt=1772618709560" className="w-100 h-100 object-fit-cover" alt="Beach" />
                                <div className="position-absolute bottom-0 start-0 p-3 text-white fw-bold w-100 bg-dark bg-opacity-25">Beach & Island Tours</div>
                            </div>
                        </div>
                        {/* Right Column Mix */}
                        <div className="col-md-5">
                            <div className="row g-3">
                                <div className="col-12" data-aos="fade-up">
                                    <div className="position-relative overflow-hidden rounded-4 shadow-sm" style={{ height: '280px' }}>
                                        <img src="https://ik.imagekit.io/j9af7werr/Popular%20things/City?updatedAt=1772618709732" className="w-100 h-100 object-fit-cover" alt="City" />
                                        <div className="position-absolute bottom-0 start-0 p-3 text-white fw-bold w-100 bg-dark bg-opacity-25">City Tours</div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="fade-up">
                                    <div className="position-relative overflow-hidden rounded-4 shadow-sm" style={{ height: '200px' }}>
                                        <img src="https://ik.imagekit.io/j9af7werr/Popular%20things/Museum?updatedAt=1772618709592" className="w-100 h-100 object-fit-cover" alt="Food" />
                                        <div className="position-absolute bottom-0 start-0 p-3 text-white fw-bold w-100 bg-dark bg-opacity-25">Museum Tours</div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="fade-up">
                                    <div className="position-relative overflow-hidden rounded-4 shadow-sm" style={{ height: '200px' }}>
                                        <img src="https://ik.imagekit.io/j9af7werr/Popular%20things/Food?updatedAt=1772618709635" className="w-100 h-100 object-fit-cover" alt="Hiking" />
                                        <div className="position-absolute bottom-0 start-0 p-3 text-white fw-bold w-100 bg-dark bg-opacity-25">Shopping & Food Tours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hover Effect CSS */}
                    <style>
                        {`
          .object-fit-cover { object-fit: cover; }
          .rounded-4 { border-radius: 1.25rem; }
          .overflow-hidden img {
            transition: transform 0.4s ease;
          }
          .overflow-hidden:hover img {
            transform: scale(1.1);
          }
        `}
                    </style>
                </section>
            </section>
            <section className="home3">
                <div className="container">
                    <div className="content">
                        <h1 data-aos="fade-up">Top Trending</h1>
                        <p data-aos="fade-up">Top trending destinations attract travelers with exciting experiences, modern attractions, cultural landmarks, and beautiful landscapes. These popular places offer unforgettable journeys, adventure, relaxation, and memorable travel opportunities worldwide.</p>
                    </div>
                    <div className="row">
                        {TopTrending.map((data) => (
                            <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch" key={data.id} data-aos="fade-up">
                                <div className="card">
                                    <img src={data.img} className='img-fluid img-thumbnail' />
                                    <div className="card-body">
                                        <NavLink className="link" to={data.link}><h4>{data.h3}</h4></NavLink>
                                        <p>{data.p}</p>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <p>{data.left}</p>
                                            <p>From <b>{data.right}</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <Testimonials/> */}
            {/* <div className="home4">
                <div className="container">
                    <h1>Travel Articles</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto consectetur praesentium natus at deleniti adipisci eveniet, odio consequuntur. Vitae repellat similique eaque accusantium, maiores reprehenderit! Obcaecati illum tempora voluptas quo?</p>
                    <div className="row">
                        {TopTrending.map((data) => (
                            <div className="col-lg-3 col-md-6 my-2 d-flex align-items-stretch" key={data.id} data-aos="fade-up">
                                <div className="card">
                                    <img src={data.img} className='img-fluid img-thumbnail' />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <p>{data.left}</p>
                                            <p>From <b>{data.right}</b></p>
                                        </div>
                                        <NavLink className="link" to={data.link}><h4>{data.h3}</h4></NavLink>
                                        <p>{data.p}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Home