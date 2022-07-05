import React from 'react'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import Shop from '../components/shop/Shop'
import TopCate from '../components/top/TopCate'
import Annu from '../components/annocuments/Annu'
import Wrapper from '../components/Wrapper/Wrapper'

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart} />
        <Annu />
        <Wrapper />
    </>
  )
}

export default Pages