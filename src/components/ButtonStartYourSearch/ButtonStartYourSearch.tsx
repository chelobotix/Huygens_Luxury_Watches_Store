import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface ButtonStartYourSearchProps {
    backgroundColor: string
    color: string
    width: string
    handleClick: () => void
}

const ButtonStartYourSearch: React.FC<ButtonStartYourSearchProps> = ({
    backgroundColor,
    color,
    width,
    handleClick,
}) => {
    return (
        <Button
            onClick={handleClick}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            style={{ backgroundColor, color, width }}
        >
            Start your search
        </Button>
    )
}
export { ButtonStartYourSearch }
