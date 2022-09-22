import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"

function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/comments" element={<h1>Comments</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </BrowserRouter>
    )

}

export default ApplicationRoutes