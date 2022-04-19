import React from 'react';
import 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/stylesheets/Cards.css';
import CardItem from 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/Components/CardItems.js';
import Movingtext from './Movingtext';

const text1 =  'Recommended for you'
const text2 = 'Quick Glimps in our world of shopping...';

function Cards() {
  return (
    <><div className='cards'>
          <h1 style={{ fontfamily: 'sans-serif' }}><Movingtext text = {text1}/></h1>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <CardItem
                          src=' https://cdn.motocms.com/src/868x580/66500/66564-original-1200.jpg   '
                          text='Explore the new arrivals in Electronics in our store'
                          label='Electronics'
                          path='/Electronics' />
                      <CardItem
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWOqjli0Bsav-d7tR5ET-o2oDUijSUDVIHCfNOyLPBXpQhIf2M6B2ryjnxzUcGsHxHIs&usqp=CAU'
                          text='Explore the new arrivals in Clothing in our store'
                          label='Clothing'
                          path='/Cloths' />
                  </ul>
                  <ul className='cards__items'>
                      <CardItem
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzT6BDKAT0q0FBQJYnD-k-tD4z-Z1qYFgDbHOdZL88HgCX_a38pEovmxzeSqG8kvyrZ3k&usqp=CAU'
                          text="Men's wear"
                          label='Men'
                          path='/Cloths' />
                      <CardItem
                          src='https://ecommerce-platforms.com/wp-content/uploads/2015/04/fashion-store_opt-compressor.png'
                          text="Women's wear"
                          label='Women'
                          path='/Cloths' />
                      <CardItem
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcjoypX9IoA_piDITUTU60nWLMiVcZf8-Iw&usqp=CAU'
                          text='Special discounts'
                          label='Specia-discounts'
                          path='/Specialpri' />
                  </ul>
              </div>
          </div>
      </div><div><h2><i><Movingtext text= {text2}/></i></h2></div></>
  );
}

export default Cards;
