import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://www.freeiconspng.com/uploads/shopping-cart-icon-5.png" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.freeiconspng.com/uploads/apple-iphone-x-pictures-5.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
