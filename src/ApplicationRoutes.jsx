import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Comments from './pages/Comments/Comments'
import Contact from './pages/Contact/Contact'

function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Comments" element={<Comments />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}

export default ApplicationRoutes