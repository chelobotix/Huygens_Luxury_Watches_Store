import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/brands" className={(navData) => (navData.isActive ? 'active' : '')}>
                        Brands
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newarrivals" className={(navData) => (navData.isActive ? 'active' : '')}>
                        New Arrivals
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(navData) => (navData.isActive ? 'active' : '')}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export { NavBar }
