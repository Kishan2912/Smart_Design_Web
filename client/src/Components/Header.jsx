import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate, Link } from 'react-router-dom'
import "./Css/Header.css"

const Header = () => {
    const navigate = useNavigate()

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwtDecode(token)
            if (!user) {
                localStorage.removeItem('token')
                // navigate('/login',{replace: true})
                setLoggedIn(false)
            } else {
                // populateQuote()
                setLoggedIn(true)
            }
        }
    }, [])

    // add logout function here
    const logout = () => {
        console.log('logout')
        const confirm=window.confirm("Are you sure?")
        if(confirm){

            localStorage.removeItem('token')
            setLoggedIn(false)
            navigate("/")
        }
    }

    return (
        <>
            <div className="header">
                <Link to="/" className="header__left">Home</Link>
                <div class="header__right">
                    {loggedIn ?
                        <>

                            <Link className='header__right_link' to="/profile">Profile</Link>
                            <button onClick={logout}>Logout</button>
                        </> :
                        <>

                            <Link className='header__right_link' to="/login">Login</Link>
                            <Link className='header__right_link' to="/register">Register</Link>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Header