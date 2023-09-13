/* eslint-disable react/prop-types */
import type React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/About/About'
import { Brand } from '../pages/Brand/Brand'
import { Watches } from '../pages/Watches/Watches'
import { Footer } from '../pages/Footer/Footer'
import { Header } from '../pages/Header/Header'
import { Home } from '../pages/Home/Home'
import { NewArrivals } from '../pages/NewArrivals/NewArrivals'
import { Error404 } from '../pages/Error404/Error404'

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="brands" element={<Watches />} />
                <Route path="brands/:brand" element={<Brand />} />
                <Route path="newarrivals" element={<NewArrivals />} />
                <Route path="watches/all" element={<Watches />} />
                <Route path="watches/all/:terms" element={<Watches />} />

                <Route path="error404" element={<Error404 />} />
                <Route path="*" element={<Error404 />} />
                {/* with parameters */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
