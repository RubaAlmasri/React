import Navbar from './Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './About';
import Contact from './Contact';


function Home() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
        </BrowserRouter>
        // <div>
        //   <Navbar />
        // </div>
    );
}

export default Home;
