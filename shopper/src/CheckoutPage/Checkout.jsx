import React from "react";
import "./Checkout.css";
import Banner from "./BannerAd.png"; // dimention- 1238*280
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="Banner">
          <img className="checkout_ad" src={Banner} />
        </div>

        <div>
          <h2 className="checkout_title"> Your Shopping Cart</h2>
          {/* BASKET ITEM1
              BASKET ITEM2
              BASKET ITEM3 
           */}
        </div>
      </div>

      <div className="checkout_right">
        <h2> THE SUBTOTAL GOES HERE</h2>
      </div>
    </div>
  );
}

export default Checkout;
