import React from 'react'

function Home(props) {
    console.warn('home', props)
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://previews.123rf.com/images/wiseant/wiseant2010/wiseant201000031/156610029-cart-icon-buy-in-online-shop-basket-for-grocery-symbol-of-store-button-of-trolley-for-add-purchase-i.jpg" alt="" />
            </div>
            <h1>home component </h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://wmstatic.global.ssl.fastly.net/ml/4101116-4147319.png?width=460&height=800" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Iphone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={()=> props.addToCartHandler({price: 1000, name: 'iphone 11'})}
                    >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
