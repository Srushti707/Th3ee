import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated", "visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in, .from-left, .from-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="announcement-bar">
        <p>🔥 Free shipping on orders over ₹999! | Use code: TH3EE10</p>
      </div>

      <section id="header">
        <a href="/"><img src="/photos/Th3ee_Logo.png" className="logo" alt="Th3ee Logo" /></a>

        <ul id="navbar-center">
          <li className="dropdown">
            <a href="#" className="dropbtn">New In</a>
            <ul className="dropdown-menu">
              <li><a href="#">Latest Arrivals</a></li>
              <li><a href="#">Trending Now</a></li>
              <li><a href="#">Editor's Picks</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" className="dropbtn">Apparels</a>
            <ul className="dropdown-menu">
              <li><a href="#">Luxe</a></li>
              <li><a href="#">Affordable</a></li>
            </ul>
          </li>
        </ul>

        <ul id="navbar-right">
          <li><Link to="/login">Login</Link></li>
          <li><a href="/cart"><i className="fa-solid fa-bag-shopping"></i></a></li>
        </ul>
      </section>

      <section id="video-banner" style={{ position: "relative" }}>
        <video autoPlay muted loop playsInline style={{ width: "100%", height: "auto" }}>
          <source src="/photos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-header">
            <h2>FEATURED PRODUCTS</h2>
            <button onClick={() => navigate("/shop")}>DISCOVER MORE</button>
          </div>
          <div className="product-grid">
            <div className="product-card">
              <img src="/photos/Product_1.jpg" alt="Brown Tiger" />
              <p className="product-name">BROWN TIGER T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
            </div>
            <div className="product-card">
              <img src="/photos/Product_1.jpg" alt="Black Panther" />
              <p className="product-name">BLACK PANTHER T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
            </div>
            <div className="product-card">
              <img src="/photos/Product_1.jpg" alt="Red Hummingbird" />
              <p className="product-name">RED HUMMINGBIRD T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
            </div>
            <div className="product-card">
              <img src="/photos/Product_1.jpg" alt="Blue Whale" />
              <p className="product-name">BLUE WHALE T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-section">
        
      </section>

      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-header">
            <h2>FEATURED PRODUCTS</h2>
            <button onClick={() => navigate("/shop")}>DISCOVER MORE</button>
          </div>
          <div className="product-grid">
            <div className="product-card">
              <img src="/photos/Product_1.jpg" alt="Brown Tiger" />
              <p className="product-name">BROWN TIGER T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
            </div>
            <div className="product-card">
              <img src="/photos/Product_1.jpg" alt="Black Panther" />
              <p className="product-name">BLACK PANTHER T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
            </div>
            <div className="product-card">
              <img src="/photos/Product_1.jpg" alt="Red Hummingbird" />
              <p className="product-name">RED HUMMINGBIRD T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
            </div>
            <div className="product-card">
              <img src="/photos/Product_1.jpg" alt="Blue Whale" />
              <p className="product-name">BLUE WHALE T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a><img src="photos/Th3ee_Logo.png" alt="THSEE Logo" className="footer-logo"/></a>
            <div className="footer-contact">
              <h3>Contact</h3>
              <address>
                <p><i className="fas fa-map-marker-alt"></i> G236 Raghuleela mall, Kandivali west, Mumbai 400067</p>
                <p><i className="fas fa-phone"></i> +91 123 456 7890</p>
                <p><i className="fas fa-clock"></i> 10:00 - 18:00, Mon - Sat</p>
              </address>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-about">
              <h3>About</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-account">
              <h3>My Account</h3>
              <ul>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">View Cart</a></li>
                <li><a href="#">My Wishlist</a></li>
                <li><a href="#">Track My Order</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy;2025 TH3EE. All Rights Reserved</p>
        </div>

      </footer>
    </>
  );
}

export default Home;
