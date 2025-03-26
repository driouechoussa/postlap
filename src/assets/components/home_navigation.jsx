
import {Container  , Navbar } from 'react-bootstrap'
import searchIcon from '../images/icons/search.svg'
import notificationIcon from '../images/icons/notification.svg'
import profileImage from '../images/user_uploaded/profile.png'

import logo from '../images/logo.svg'

function Home_navigation() {
  return (
    <Navbar expand="lg" className="bg-white">
          <Container>
            <Navbar.Brand href="#home"><img width={100} src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="me-auto   m-auto d-flex border rounded-1">
                    <input className='border-0 w-100 no-outline px-2' placeholder='search' type="text" name="" id="" />
                    <button className='border-0 '><img src={searchIcon}/></button>
                </div>
                <div className=''>
                    <button title='notifications' className='p-1 border-0 bg-transparent rounded-circle mx-3' type="button"><img src={notificationIcon} alt="notification"/></button>
                    <span className='pointer' title='profile'><img width={40} src={profileImage} alt="user" /></span>
                </div> 
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default Home_navigation