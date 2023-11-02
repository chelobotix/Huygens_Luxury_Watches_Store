import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface ButtonStartYourSearchProps {
    backgroundColor: string
    handleClick: () => void
    color: string
}

const ButtonStartYourSearch: React.FC<ButtonStartYourSearchProps> = ({ backgroundColor, color, handleClick }) => {
    return (
        <Button
            onClick={handleClick}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            style={{ backgroundColor, color, width: '280px' }}
        >
            Start your search
        </Button>
    )
}
export { ButtonStartYourSearch }
