import React from 'react'
import Row from './Row'
import './App.css'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import { Route, Routes } from 'react-router-dom'
import ProfileScreen from './Screens/ProfileScreen'
function App() {
  return (
    <Routes>
      <Route path='/' element={<div>
        <LoginScreen />
      </div>}/>
      <Route path='homePage' element={<div className="App">
        <HomeScreen />
      </div>}/>
      <Route path='homePage/profile' element = {<ProfileScreen/>}/> 
    </Routes>
  )
}
export default App