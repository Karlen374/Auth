import {NavLink } from "react-router-dom";
import './AppHeader.scss'
import { useDispatch, useSelector,getState } from 'react-redux';
import { useEffect } from "react";
import { checkAuth,logout } from "../loginPanel/LoginSlice";
import Button from 'react-bootstrap/Button'
import Avatar from '@mui/material/Avatar';

const AppHeader = () => {

  const {user} = useSelector(store => store.login);
  const {countryFlag}=useSelector(store=>store.weather)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(checkAuth())
    }
  },[])

  return (
    <header className="app__header">
      
      <nav className="app__menu">
        <ul>
            <li><Avatar alt="Country Flag" src={countryFlag} /></li>/
            <li>{user?.isActivated ? `${user.email} `:<NavLink style={({isActive})=>({color:isActive?'#9f0013':'inherit',backgroundColor:'#E0E5FF'})}  to="/registration">Create an account</NavLink>}</li>/
            <li>{user?.isActivated? <Button onClick={()=>{dispatch(logout())}} variant="outline-success">Log Out</Button>:<NavLink style={({isActive})=>({color:isActive?'#9f0013':'inherit',backgroundColor:'#E0E5FF'})}  to="/">Sig In</NavLink>}</li>/
            <li><NavLink end style={({isActive})=>({color:isActive?'#9f0013':'inherit',backgroundColor:'#E0E5FF'})} to="/weatherList">Weather</NavLink></li>
            /
            <li><NavLink  style={({isActive})=>({color:isActive?'#9f0013':'inherit',backgroundColor:'#E0E5FF'})} to="/exchangeValue">Exchange Rates</NavLink></li>/
            <li><NavLink  style={({isActive})=>({color:isActive?'#9f0013':'inherit',backgroundColor:'#E0E5FF'})} to="/marvelPage">Marvel</NavLink></li>/
            <li><NavLink  style={({isActive})=>({color:isActive?'#9f0013':'inherit',backgroundColor:'#E0E5FF'})} to="/FoodList">Food</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
export default AppHeader;