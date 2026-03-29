import React from 'react';
const PopularDestinations = () => {
    const destinations = [
        { id: 1, name: "Istanbul", country: "Turkey", img: "https://ik.imagekit.io/j9af7werr/Destinations/Turkey?updatedAt=1772618172370" },
        { id: 2, name: "Doha", country: "Qatar", img: "https://ik.imagekit.io/j9af7werr/Destinations/Doha?updatedAt=1772618092627" },
        { id: 3, name: "Baku", country: "Azerbaijan", img: "https://ik.imagekit.io/j9af7werr/Destinations/Baku?updatedAt=1772617948482" },
        { id: 4, name: "Dubai", country: "UAE", img: "https://ik.imagekit.io/j9af7werr/Destinations/Dubai?updatedAt=1772617025658" },
        { id: 5, name: "New York", country: "USA", img: "https://ik.imagekit.io/j9af7werr/Destinations/USA?updatedAt=1772617696688" },
        { id: 6, name: "Tokyo", country: "Japan", img: "https://ik.imagekit.io/j9af7werr/Destinations/Tokyo?updatedAt=1772617577190" },
        { id: 7, name: "London", country: "UK", img: "https://ik.imagekit.io/j9af7werr/Destinations/London?updatedAt=1772617398146" },
        { id: 8, name: "Maldives", country: "South Asia", img: "https://ik.imagekit.io/j9af7werr/Destinations/Maldives?updatedAt=1772617241369" },
        { id: 9, name: "Paris", country: "France", img: "https://ik.imagekit.io/j9af7werr/Destinations/Paris?updatedAt=1772619322677" },
    ];
    // List ko duplicate kiya taake loop infinite lage
    const scrollList = [...destinations, ...destinations];
    return (
        <div className="Destinations">
            <div className="container">
                <div style={styles.section}>
                    <h1 data-aos="fade-up">Top Picks for You</h1>
                    <p data-aos="fade-up">Join thousands of travelers heading to the world’s most iconic spots. Whether it’s the futuristic skyline of Dubai, the serene beaches of the Maldives, the historic streets of Istanbul, or the vibrant culture of Baku, we have the perfect itinerary waiting for you.</p>
                    <div style={styles.sliderContainer} data-aos="fade-up">
                        <div className="marquee-content" style={styles.marquee}>
                            {scrollList.map((item, index) => (
                                <div key={index} style={styles.card}>
                                    <img src={item.img} alt={item.name} style={styles.image} />
                                    <div style={styles.overlay}>
                                        <h3 style={styles.cardTitle}>{item.name}</h3>
                                        <p style={styles.cardSubTitle}>{item.country}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
          @keyframes scrollRightToLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-content {
            display: flex;
            animation: scrollRightToLeft 25s linear infinite;
            width: fit-content;
          }
          .marquee-content:hover {
            animation-play-state: paused;
            cursor: pointer;
          }
        `}
            </style>
        </div>
    );
};
// Internal CSS Objects
const styles = {

    section: {
        padding: '60px 0',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif'
    },
    heading: {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '40px',
        color: '#333'
    },
    sliderContainer: {
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
    },
    card: {
        flexShrink: 0,
        width: '280px',
        height: '380px',
        margin: '0 15px',
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease'
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '20px',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        color: 'white'
    },
    cardTitle: {
        margin: 0,
        fontSize: '22px',
        fontWeight: 'bold'
    },
    cardSubTitle: {
        margin: '5px 0 0',
        fontSize: '14px',
        opacity: 0.8
    }
};
export default PopularDestinations;