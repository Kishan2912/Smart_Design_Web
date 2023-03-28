import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'
import Register from './Components/Register'
import Profile from './Components/Profile'
import EditProfile from './Components/EditProfile'

const App = () => {
	return (
		<>
		  <Router>
           <Routes>
                 <Route exact path='/' element={< Home	 />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
                 <Route exact path='/profile' element={< Profile />}></Route>
                 <Route exact path='/editprofile' element={< EditProfile />}></Route>
          </Routes>
       </Router>
		</>
	)
}

export default App