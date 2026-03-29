import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
const ScrollToTopButton = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrollPercent = (scrollTop / docHeight) * 100;

            if (scrollPercent > 10) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button
            className={`scroll-btn ${show ? "show" : ""}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};
export default ScrollToTopButton;