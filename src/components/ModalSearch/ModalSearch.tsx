import { Modal, Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { type ReactNode, type PropsWithChildren } from 'react'

interface ModalSearchProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode
}

const ModalSearch: React.FC<PropsWithChildren<ModalSearchProps>> = ({ isOpen, setIsOpen, children }) => {
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
            <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
                <div className="h-screen overflow-y-auto bg-white">
                    <div className="flex justify-end">
                        <div className="center-row h-[50px] w-1/5 border-[1px] border-softGray">
                            <button onClick={handleClose}>
                                <CloseIcon className="text-darkBlue" />
                            </button>
                        </div>
                        <div className=" flex h-[50px] w-4/5 items-center border-b-[1px] border-softGray">
                            <p className="pl-2 font-semibold text-darkBlue">FILTER</p>
                        </div>
                    </div>
                    {children}
                </div>
            </Slide>
        </Modal>
    )
}
export { ModalSearch }
