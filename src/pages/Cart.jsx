import React from 'react';

const Cart = () => {
  return (
    <div id="books__body">
     <main id="books__main">
        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="cart__title">
                        Cart</h2>
                </div>
                <div className="cart">
                    <div className="cart__header">
                    <span className="cart__book">Book</span>
                    <span className="cart__quantity">Quantity</span>
                    <span className="cart__total">Price</span>
                </div>
                <div className="cart__body">
                <div className="cart__item">
                    <div className="cart__book">
                        <img 
                        src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                        className="cart__book--img"
                        alt=""
                        />
                    <div className="cart__book--info">
                        <span className="cart__book--title">
                            Crack the coding Interview
                        </span>
                        <span className="cart_book--price">
                            $10.00
                        </span>
                        <button className="cart__book--remove">
                            Remove
                        </button>
                    </div>


                    </div>
              </div>
              </div>
              </div>      
            </div>
        </div>
     </main>
    </div>
  );
}

export default Cart;