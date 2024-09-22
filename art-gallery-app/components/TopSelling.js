'use client'
import { useState } from 'react';
import styles from '../app/Home/styles.module.css'
import Artworks from './Artworks'
import { Suspense } from 'react';
export default function TopSelling(){
  const  [category,setCategory] = useState('Nature')
  const categorizedArtworks = {
    Nature: [
      {
        image_url: '/images/TopSellin/nature1.jpg',
        image_name: 'Sunset Bliss',
        image_artist: 'John Doe',
        image_description: 'A beautiful sunset over the mountains.',
      },
      {
        image_url: '/images/TopSellin/nature2.jpg',
        image_name: 'Ocean Waves',
        image_artist: 'Jane Smith',
        image_description: 'Capturing the power and beauty of the ocean.',
      },
      {
        image_url: '/images/TopSellin/nature3.jpg',
        image_name: 'Forest Path',
        image_artist: 'Emily Johnson',
        image_description: 'A serene path through a lush forest.',
      },
      {
        image_url: '/images/TopSellin/nature4.jpg',
        image_name: 'City Lights',
        image_artist: 'Michael Brown',
        image_description: 'The vibrant lights of a bustling city at night.',
      },
    ],
    Animals: [
      {
        image_url: '/images/TopSellin/animal1.jpg',
        image_name: 'Wildlife Wonder',
        image_artist: 'Alice Green',
        image_description: 'A majestic lion in the savannah.',
      },
      {
        image_url: '/images/TopSellin/animal2.jpg',
        image_name: 'Birds in Flight',
        image_artist: 'Bob White',
        image_description: 'A flock of birds soaring in the sky.',
      },
      {
        image_url: '/images/TopSellin/animal3.jpg',
        image_name: 'Underwater World',
        image_artist: 'Cathy Blue',
        image_description: 'Colorful fish swimming in a coral reef.',
      },
      {
        image_url: '/images/TopSellin/animal4.jpg',
        image_name: 'Forest Creatures',
        image_artist: 'David Brown',
        image_description: 'Various animals in a dense forest.',
      },
    ],
    Sports: [
      {
        image_url: '/images/TopSellin/sports1.jpg',
        image_name: 'Soccer Stars',
        image_artist: 'Eve Black',
        image_description: 'A thrilling soccer match in action.',
      },
      {
        image_url: '/images/TopSellin/sports2.jpg',
        image_name: 'Basketball Dunk',
        image_artist: 'Frank Green',
        image_description: 'A player making an impressive dunk.',
      },
      {
        image_url: '/images/TopSellin/sports3.jpg',
        image_name: 'Tennis Match',
        image_artist: 'Grace White',
        image_description: 'A competitive tennis match.',
      },
      {
        image_url: '/images/TopSellin/sports4.jpg',
        image_name: 'Marathon Run',
        image_artist: 'Henry Blue',
        image_description: 'Runners participating in a marathon.',
      },
    ],
    Vehicles: [
      {
        image_url: '/images/TopSellin/car1.jpg',
        image_name: 'Classic Car',
        image_artist: 'Ivy Red',
        image_description: 'A beautifully restored classic car.',
      },
      {
        image_url: '/images/TopSellin/car2.jpg',
        image_name: 'Speed Boat',
        image_artist: 'Jack Yellow',
        image_description: 'A speed boat racing on the water.',
      },
      {
        image_url: '/images/TopSellin/car3.jpg',
        image_name: 'Motorcycle Ride',
        image_artist: 'Karen Green',
        image_description: 'A motorcycle cruising down the highway.',
      },
      {
        image_url: '/images/TopSellin/car4.jpg',
        image_name: 'Airplane Takeoff',
        image_artist: 'Leo Blue',
        image_description: 'An airplane taking off from the runway.',
      },
    ],
    Architecture: [
      {
        image_url: '/images/TopSellin/arch1.jpg',
        image_name: 'Modern Skyscraper',
        image_artist: 'Mia White',
        image_description: 'A stunning modern skyscraper.',
      },
      {
        image_url: '/images/TopSellin/arch2.jpg',
        image_name: 'Historic Castle',
        image_artist: 'Nate Black',
        image_description: 'A historic castle with rich history.',
      },
      {
        image_url: '/images/TopSellin/arch3.jpg',
        image_name: 'Bridge at Night',
        image_artist: 'Olivia Green',
        image_description: 'A beautifully lit bridge at night.',
      },
      {
        image_url: '/images/TopSellin/arch4.jpg',
        image_name: 'Cityscape',
        image_artist: 'Paul Blue',
        image_description: 'A panoramic view of a cityscape.',
      },
    ],
  };
  
  const isSelectedCategory = (event) => {
    setCategory(event.target.getAttribute('data-value'))
  }
  return (
    <div className={styles.TopSelling}>
      <h1 className={styles.TopSellingHeading}>Top Selling</h1>
      <div className={`${styles.selectionMenu} border-4`}>
        <a className='cursor-pointer font-bold' onClick={isSelectedCategory} data-value="Nature">Nature</a>
        <a className='cursor-pointer font-bold' onClick={isSelectedCategory} data-value="Animals">Animals</a>
        <a className='cursor-pointer font-bold' onClick={isSelectedCategory} data-value="Sports">Sports</a>
        <a className='cursor-pointer font-bold' onClick={isSelectedCategory} data-value="Vehicles">Vehicles</a>
        <a className='cursor-pointer font-bold' onClick={isSelectedCategory} data-value="Architecture">Architecture</a>
      </div>
      <div className={styles.TopSellingContainer} id="TopSelling">
          {categorizedArtworks[category]?.map((artwork, index) => (
            <Artworks
              key={index}
              image_url={artwork.image_url}
              image_name={artwork.image_name}
              image_artist={artwork.image_artist}
              image_description={artwork.image_description}
            />
          ))}
      </div>
    </div>
  );
}

