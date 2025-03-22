
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {

    
  return (
   <nav>
        <NavLink to='/greetingpage'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
   </nav>
  )
}

export default Navbar