import React from "react";
import "./Header.css";

function Header({ quantity = 0, total = 0 }) {
    return (
        <div>
            <header className="title">
                <h1>Website Title</h1>
            </header>
            <div className="tagline">
                <h2 className="cart">Cart <span>🛒</span></h2>
                <div className="prices">
                    <h3>Quantity: </h3>
                    <input className="pricesinput" readOnly value={quantity} />
                    <h3>Total: </h3>
                    <input className="pricesinput" readOnly value={`${total} $`} />
                </div>
            </div>
        </div>
    );
}

export default Header;