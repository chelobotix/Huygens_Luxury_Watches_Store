import { Button, Modal, Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { NavLink } from 'react-router-dom'

interface MenuModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MenuModal: React.FC<MenuModalProps> = ({ isOpen, setIsOpen }) => {
    const handleClose = (): void => {
        setIsOpen(false)
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
        >
            <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
                <div className="h-screen  w-3/4 bg-white">
                    <div className="flex items-start justify-between">
                        <div className="center-col h-[50px] w-4/5 border-b-[1px] border-softGray">
                            <p className="justify-self-center text-xl font-semibold text-darkBlue">HUYGUENS</p>
                            <p className="text-sm text-slate-400">Luxury Watches</p>
                        </div>
                        <div className="h-[50px] w-1/5 border-[1px] border-softGray text-right">
                            <button onClick={handleClose}>
                                <CloseIcon className="text-darkBlue" />
                            </button>
                        </div>
                    </div>
                    <ul className="px-2 text-darkBlue">
                        <li className="border-b-[1px] border-softGray py-2">
                            <NavLink
                                to="/"
                                onClick={handleClose}
                                className={(navData) => (navData.isActive ? 'font-bold' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="border-b-[1px] border-softGray py-2">
                            <NavLink
                                to="/brands"
                                onClick={handleClose}
                                className={(navData) => (navData.isActive ? 'font-bold' : '')}
                            >
                                Brands
                            </NavLink>
                        </li>
                        <li className="border-b-[1px] border-softGray py-2">
                            <NavLink to="/newarrivals" className={(navData) => (navData.isActive ? 'active' : '')}>
                                New Arrivals
                            </NavLink>
                        </li>
                        <li className="border-b-[1px] border-softGray py-2">
                            <NavLink
                                to="/about"
                                onClick={handleClose}
                                className={(navData) => (navData.isActive ? 'font-bold' : '')}
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="pt-2">
                            <NavLink
                                to="/watches/all"
                                onClick={handleClose}
                                className={(navData) => (navData.isActive ? 'font-bold' : '')}
                            >
                                Watches
                            </NavLink>
                        </li>
                    </ul>
                    <div className="my-9 flex justify-center gap-4 px-1">
                        <Button sx={{ width: '100%', maxWidth: '100px' }} color="secondary" variant="contained">
                            Log in
                        </Button>
                        <Button sx={{ width: '100%', maxWidth: '100px' }} color="primary" variant="contained">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </Slide>
        </Modal>
    )
}
export { MenuModal }
