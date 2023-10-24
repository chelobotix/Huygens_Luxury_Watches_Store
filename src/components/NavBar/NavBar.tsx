import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import style from './NavBar.module.css'
import { InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'
import { AccountCircle } from '@mui/icons-material'

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className={`${style.navbarContainer}`}>
                <div className="sm:hidden">
                    <MenuIcon className="text-darkBlue" />
                </div>

                <div className="center-row gap-2">
                    <img src="/images/icons/huyguens.png" alt="" className="w-3/12 max-w-[50px] sm:w-16" />
                    <div className="center-col">
                        <p className="justify-self-center text-xl font-semibold text-darkBlue sm:text-white md:text-3xl ">
                            HUYGUENS
                        </p>
                        <p className="text-sm text-slate-400">Luxury Watches</p>
                    </div>
                </div>

                <div className="hidden w-full justify-center sm:flex">
                    <TextField
                        size="small"
                        className="w-4/5 rounded-lg bg-white text-center"
                        id="input-with-icon-adornment"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon className="text-darkBlue" style={{ fontSize: 30 }} />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                    />
                </div>

                <div className="flex gap-2 justify-self-end">
                    <div>
                        <PersonOutlineIcon className="sm:text-white" style={{ fontSize: 30 }} />
                    </div>
                    <div className="sm:hidden">
                        <SearchIcon className="sm:text-white" style={{ fontSize: 30 }} />
                    </div>
                </div>
            </div>
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

                <li>
                    <NavLink to="/watches/all" className={(navData) => (navData.isActive ? 'active' : '')}>
                        Watches
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export { NavBar }
