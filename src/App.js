import React from 'react';
import Home from './components/Home'
import Showcase from './components/Showcase';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/showcase' element={<Showcase/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/resume' element={<Resume/>}/> */}
        </Routes>
        <Footer />
    </div>
    );
}

export default App;