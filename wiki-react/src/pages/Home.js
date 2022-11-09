import React from 'react'
import Search from '../components/Search'
import './Home.css'
import kjse2 from './img/kjse2.png'


function Home() {
  return (
    <div className='home'>
      <div className='home__header'>

      </div>
      <div className='home__body'>
        <img src={kjse2} alt="" />
        <div className='home__inputContainer'>
           <Search hideButtons={false}/>
        </div>
      </div>
    </div>
)
}

export default Home
