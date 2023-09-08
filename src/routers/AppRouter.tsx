/* eslint-disable react/prop-types */
import type React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../pages/About/About'
import { Footer } from '../pages/Footer/Footer'
import { Header } from '../pages/Header/Header'
import { Home } from '../pages/Home/Home'
import { Brands } from '../pages/Brands/Brands'
import { Brand } from '../pages/Brand/Brand'
import { NewArrivals } from '../pages/NewArrivals/NewArrivals'

const AppRouter: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="brands" element={<Brands />} />
                    <Route path="newarrivals" element={<NewArrivals />} />
                    <Route path="brands/:brand" element={<Brand />} />

                    {/* with parameters */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
