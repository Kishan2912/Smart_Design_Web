import React, { useEffect, useState } from 'react'
import Header from './Header'
import './Css/Home.css'

const Home = () => {

    return (
        <>
        <div className='full_home'>

            <Header />
            <div className='home'>
                <h1 className="home-header">Authenticatoin System</h1>
            </div>
        </div>
        </>
    )
}

export default Home