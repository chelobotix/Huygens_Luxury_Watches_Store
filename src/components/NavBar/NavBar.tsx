import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'
import { MenuModal } from '../MenuModal/MenuModal'
import { useState } from 'react'
import { NavBarStyled } from './NavBar.styled'

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = (): void => {
        setIsOpen(true)
    }
    return (
        <NavBarStyled>
            <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="navbarContainer sm:text-md sm:bg-darkBlue">
                <div onClick={handleOpen} className="ml-1 sm:hidden">
                    <MenuIcon className="text-darkBlue" />
                </div>

                <div className="center-row ml-1 gap-2">
                    <img src="/images/icons/huyguens.png" alt="" className="w-3/12 max-w-[50px] sm:w-16" />
                    <div className="center-col">
                        <p className="pTitle text-darkBlue sm:text-white md:text-3xl ">HUYGUENS</p>
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

                <div className="flex gap-3 justify-self-end">
                    <div className="mr-1 flex gap-2 sm:hidden">
                        <PersonOutlineIcon className="sm:text-white" />

                        <SearchIcon className="stroke-0 sm:text-white" />
                    </div>
                    <div className="mr-5 hidden gap-3 sm:flex">
                        <NavLink to="/underConstruction" className="text-white hover:text-softGray">
                            LOG IN
                        </NavLink>
                        <NavLink to="/underConstruction" className="text-white hover:text-softGray">
                            SIGN UP
                        </NavLink>
                    </div>
                </div>
            </div>
            <ul className="linksBar hidden sm:flex">
                <li>
                    <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/brands" className={(navData) => (navData.isActive ? 'active' : '')}>
                        BRANDS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/watches/all" className={(navData) => (navData.isActive ? 'active' : '')}>
                        WATCHES
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(navData) => (navData.isActive ? 'active' : '')}>
                        ABOUT
                    </NavLink>
                </li>
            </ul>
        </NavBarStyled>
    )
}
export { NavBar }
