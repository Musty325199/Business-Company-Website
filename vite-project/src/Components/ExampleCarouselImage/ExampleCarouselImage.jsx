import React from 'react';
import '../../Components/ExampleCarouselImage/ExampleCarouselImage.css';

const ExampleCarouselImage = (props) => {
  return (
    <div className='ExampleCarousel'><p>{props.text}</p></div>
  )
}

export default ExampleCarouselImage