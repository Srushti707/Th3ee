import React from "react";
import "./shop.css";

function Shop() {
  const openModal = (title, price, image) => {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("modalImg").src = image;
    document.getElementById("quickViewModal").style.display = "flex";
  };

  const closeModal = () => {
    document.getElementById("quickViewModal").style.display = "none";
  };

  return (
    <>
      <div id="announcement-bar">
        <p>🔥 Free shipping on orders over ₹999! | Use code: TH3EE10</p>
      </div>

      <section id="header">
        <a href="/">
          <img src="/photos/Th3ee_Logo.png" className="logo" alt="Th3ee Logo" />
        </a>
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
          <li><a href="/login">Login</a></li>
          <li><a href="/cart"><i className="fa-solid fa-bag-shopping"></i></a></li>
        </ul>
      </section>

      <div className="product-page">
        <aside className="filters">
          <h3>Categories</h3>
          <ul>
            <li><label><input type="checkbox" defaultChecked /> All (109)</label></li>
            <li><label><input type="checkbox" /> T-Shirts</label></li>
            <li><label><input type="checkbox" /> Hoodies</label></li>
            <li><label><input type="checkbox" /> Bottoms</label></li>
          </ul>
          <h3>Price</h3>
          <ul>
            <li><label><input type="checkbox" /> ₹0 - ₹999</label></li>
            <li><label><input type="checkbox" /> ₹1,000 - ₹1,999</label></li>
            <li><label><input type="checkbox" /> ₹2,000 +</label></li>
          </ul>
          <h3>Color</h3>
          <ul>
            <li><label><input type="checkbox" /> Black</label></li>
            <li><label><input type="checkbox" /> White</label></li>
            <li><label><input type="checkbox" /> Beige</label></li>
            <li><label><input type="checkbox" /> Red</label></li>
          </ul>
        </aside>

        <main className="product-listing">
          <div className="listing-header">
            <h2>All Products (109)</h2>
            <select>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="product-grid">
            <div
              className="product-card"
              onClick={() => openModal("Brown Tiger T-Shirt", "Rs. 4,495", "/photos/Product_1.jpg")}
            >
              <span className="badge">New</span>
              <img src="/photos/Product_1.jpg" alt="Brown Tiger T-Shirt" />
              <p className="product-name">BROWN TIGER T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
              <p className="rating">★ ★ ★ ★ ☆ (73)</p>
            </div>

            <div
              className="product-card"
              onClick={() => openModal("BLACK PANTHER T-SHIRT", "Rs. 4,495", "/photos/Product_1.jpg")}
            >
              <img src="/photos/Product_1.jpg" alt="Black Panther T-Shirt" />
              <p className="product-name">BLACK PANTHER T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
              <p className="rating">★ ★ ★ ★ ★ (122)</p>
            </div>

            <div
              className="product-card"
              onClick={() => openModal("RED HUMMINGBIRD T-SHIRT", "Rs. 4,495", "/photos/Product_1.jpg")}
            >
              <img src="/photos/Product_1.jpg" alt="Red Hummingbird T-Shirt" />
              <p className="product-name">RED HUMMINGBIRD T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
              <p className="rating">★ ★ ★ ☆ ☆ (41)</p>
            </div>

            <div
              className="product-card"
              onClick={() => openModal("BLUE WHALE T-SHIRT", "Rs. 4,495", "/photos/Product_1.jpg")}
            >
              <span className="badge">Best Seller</span>
              <img src="/photos/Product_1.jpg" alt="Blue Whale T-Shirt" />
              <p className="product-name">BLUE WHALE T-SHIRT</p>
              <p className="product-price">Rs. 4,495</p>
              <p className="rating">★ ★ ★ ★ ★ (198)</p>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <button style={{ padding: "8px 16px" }}>1</button>
            <button style={{ padding: "8px 16px" }}>2</button>
            <button style={{ padding: "8px 16px" }}>3</button>
            <button style={{ padding: "8px 16px" }}>Next →</button>
          </div>
        </main>
      </div>

      <div
        id="quickViewModal"
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            background: "white",
            padding: 30,
            borderRadius: 8,
            maxWidth: 500,
            width: "90%",
            position: "relative",
          }}
        >
          <button
            onClick={closeModal}
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            ✖
          </button>
          <img
            id="modalImg"
            src=""
            alt=""
            style={{ width: "100%", borderRadius: 8, marginBottom: 20 }}
          />
          <h2 id="modalTitle"></h2>
          <p
            id="modalPrice"
            style={{ fontWeight: "bold", marginTop: 10 }}
          ></p>
          <p style={{ marginTop: 10, fontSize: 14, color: "#666" }}>
            Premium fabric, oversized fit. Limited stock.
          </p>
          <button
            style={{
              marginTop: 20,
              padding: "10px 20px",
              background: "#1a1a1a",
              color: "white",
              border: "none",
              borderRadius: 6,
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <footer
        style={{
          textAlign: "center",
          background: "#f3f3f3",
          padding: "40px 10px",
          marginTop: 60,
        }}
      >
        <img
          src="/photos/Th3ee_Logo.png"
          alt="Th3ee"
          style={{ height: 40, filter: "grayscale(100%)", marginBottom: 16 }}
        />
        <p style={{ fontSize: 14, color: "#555" }}>© 2025 Th3ee. All rights reserved.</p>
        <div style={{ marginTop: 10 }}>
          <a href="#" style={{ margin: "0 10px", color: "#555" }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" style={{ margin: "0 10px", color: "#555" }}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" style={{ margin: "0 10px", color: "#555" }}>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Shop;
