// import { useEffect } from "react";
// const MouseTrail = () => {
//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             const trail = document.createElement("div");
//             trail.classList.add("trail");
//             document.body.appendChild(trail);
//             // Mouse position set karna
//             trail.style.left = `${event.clientX}px`;
//             trail.style.top = `${event.clientY}px`;

//             // Trail remove na ho, instead puri screen par dikhay
//             setTimeout(() => {
//                 trail.style.opacity = "1"; // Hamesha visible rahe
//             }, 500);
//         };
//         document.addEventListener("mousemove", handleMouseMove);
//         return () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//         };
//     }, []);

//     return null;
// };
// export default MouseTrail;


// import { useEffect } from "react";

// const MouseTrail = () => {
//     useEffect(() => {
//         const dot = document.createElement("div");
//         dot.style.position = "fixed";
//         dot.style.width = "16px";
//         dot.style.height = "16px";
//         dot.style.borderRadius = "50%";
//         dot.style.backgroundColor = "#555";
//         dot.style.pointerEvents = "none";
//         dot.style.zIndex = "10000";
//         dot.style.transition = "background-color 0.2s ease";
//         document.body.appendChild(dot);

//         let mouseX = 0;
//         let mouseY = 0;
//         let currentX = 0;
//         let currentY = 0;

//         const handleMouseMove = (e) => {
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//         };

//         const followMouse = () => {
//             // Interpolation
//             currentX += (mouseX - currentX) * 0.1;
//             currentY += (mouseY - currentY) * 0.1;
//             dot.style.transform = `translate(${currentX - 8}px, ${currentY - 8}px)`;
//             requestAnimationFrame(followMouse);
//         };

//         document.addEventListener("mousemove", handleMouseMove);
//         requestAnimationFrame(followMouse);

//         return () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//             document.body.removeChild(dot);
//         };
//     }, []);

//     return null;
// };
// export default MouseTrail;








// import React, { useEffect, useRef } from 'react';

// const MouseTrail = () => {
//     const dotRef = useRef(null);
//     const mouse = useRef({ x: 0, y: 0 });
//     const dot = useRef({ x: 0, y: 0 });
//     useEffect(() => {
//         const dotEl = document.createElement("div");
//         dotEl.style.position = "fixed";
//         dotEl.style.top = "0";
//         dotEl.style.left = "0";
//         dotEl.style.width = "10px";
//         dotEl.style.height = "10px";
//         dotEl.style.borderRadius = "50%";
//         dotEl.style.backgroundColor = "black";
//         dotEl.style.pointerEvents = "none";
//         dotEl.style.zIndex = "9999";
//         dotEl.style.transition = "transform 0.1s linear";
//         document.body.appendChild(dotEl);
//         dotRef.current = dotEl;
//         const move = (e) => {
//             mouse.current.x = e.clientX;
//             mouse.current.y = e.clientY;
//         };
//         const animate = () => {
//             dot.current.x += (mouse.current.x - dot.current.x) * 0.0;
//             dot.current.y += (mouse.current.y - dot.current.y) * 0.0;

//             if (dotRef.current) {
//                 dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
//             }
//             requestAnimationFrame(animate);
//         };
//         document.addEventListener("mousemove", move);
//         animate();

//         return () => {
//             document.removeEventListener("mousemove", move);
//             document.body.removeChild(dotRef.current);
//         };
//     }, []);
//     return null;
// };
// export default MouseTrail;



import React, { useEffect, useRef } from 'react';
const MouseTrail = () => {
    const dotRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const dot = useRef({ x: 0, y: 0 });
    useEffect(() => {
        const dotEl = document.createElement("div");
        const baseSize = 30; // base size in px
        const scaleFactor = 1.3; // 30% increase
        const size = baseSize * scaleFactor;
        dotEl.style.position = "fixed";
        dotEl.style.top = "0";
        dotEl.style.left = "0";
        dotEl.style.width = `${size}px`;
        dotEl.style.height = `${size}px`;
        dotEl.style.borderRadius = "50%";
        dotEl.style.backgroundColor = "#F48120";
        dotEl.style.border = "2px solid white"; // border added
        dotEl.style.pointerEvents = "none";
        dotEl.style.zIndex = "9999";
        // transition is not needed if using requestAnimationFrame for smooth animation
        dotEl.style.willChange = "transform"; // optimization hint
        document.body.appendChild(dotEl);
        dotRef.current = dotEl;
        const move = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };
        const animate = () => {
            // Smooth follow, a factor like 0.1 or 0.2 is good (0 means no movement)
            dot.current.x += (mouse.current.x - dot.current.x) * 0.15;
            dot.current.y += (mouse.current.y - dot.current.y) * 0.15;
            if (dotRef.current) {
                // We subtract half of the dot size so it centers on mouse pointer
                dotRef.current.style.transform = `translate3d(${dot.current.x - size / 2}px, ${dot.current.y - size / 2}px, 0)`;
            }
            requestAnimationFrame(animate);
        };
        document.addEventListener("mousemove", move);
        animate();
        return () => {
            document.removeEventListener("mousemove", move);
            if (dotRef.current) {
                document.body.removeChild(dotRef.current);
            }
        };
    }, []);

    return null;
};
export default MouseTrail;