import React from 'react'
import Button from './Button'

const Home = () => {
    const handleClick = ()=>{
        console.log('Button clicked from home ');
    }
    const handleClickWarning = ()=>{
        console.log('Warning Button clicked from home ');
    }
  return (
    <div>
        Welcome to my website
        <Button handleClick={handleClick} color='primary'>This is test button</Button>
        <Button handleClick={handleClickWarning} color='warning'>This is warning button</Button>
    </div>
  )
}

export default Home