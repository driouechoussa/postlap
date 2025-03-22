
import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import About from './components/about'
import Contact from './components/contact'
import Greetingpage from './components/greetingpage'

function App() {
  return (
   <React.Fragment>
       <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route  path='About' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='greetingpage' element={<Greetingpage/>} />
        </Routes>
    </BrowserRouter>
   </React.Fragment>
  )
}

export default App
