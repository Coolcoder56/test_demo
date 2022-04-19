import React from 'react'
import { Carousel } from 'react-bootstrap'



const Banner = () => {
  return (
    <div>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 id = 'firstslider_text'>Welcome to Litonline</h3>
      <p id = 'firstslider_text'>We present to you a world of ecommerce...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://static.vecteezy.com/system/resources/thumbnails/001/937/856/small/paper-art-shopping-online-on-smartphone-sale-promotion-backgroud-banner-for-market-ecommerce-free-vector.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 id = 'firstslider_text'>Amazing offers </h3>
      <p id = 'firstslider_text'>Keep browsing to find more...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/b4/6e/b7/b46eb746f7664083877a42aa05062dfe.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 id = 'firstslider_text'>Buy what you want</h3>
      <h3  id = 'firstslider_text'>Special sale discounts and much more...</h3>
      <p style ={{color : 'purple'}}>Policies apply...</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </div>
  )
}

export default Banner;



