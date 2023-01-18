import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import  image_9  from "../images/img-9.jpg"
import  image_2  from "../images/img-2.jpg"
import  image_3  from "../images/img-3.jpg"
import  image_4  from "../images/img-4.jpg"
import  image_8  from "../images/img-8.jpg"

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
            <ul className='cards__items'>
            <CardItem
              src={image_9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={image_2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image_3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={image_4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={image_8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards