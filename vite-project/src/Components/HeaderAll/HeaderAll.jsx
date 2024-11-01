import React from 'react'
import '../HeaderAll/HeaderAll.css';

const HeaderAll = (props) => {
  return (
    <header className='header'>
    <h1 className='dBlog'>{props.name}</h1>
  </header>
  )
}

export default HeaderAll