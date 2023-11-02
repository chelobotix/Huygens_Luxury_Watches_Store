import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { StyledContainer } from './CustomSelectOption.styled'
import { useClickAway } from '@uidotdev/usehooks'
import { Button, Fade, useMediaQuery } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { searchQueryConstructor } from '../../pages/Watches/searchQueryConstructor'
import { useAppSelector } from '../../reducers/redux/store'
import { createTheme } from '@mui/material/styles'

const SelectOptionPrice: React.FC = () => {
    const search = useAppSelector((state) => state.search)
    const theme = createTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const [clickStyle, setClickStyle] = useState(false)

    let maxPrice = parseInt(search.maxPrice)
    if (parseInt(search.maxPrice) >= 300000) {
        maxPrice = 300000
    }
    const [range, setRange] = useState<number[]>([0, 300000])

    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (search.minPrice !== '') {
            setRange([parseInt(search.minPrice), maxPrice])
        } else {
            setRange([0, 300000])
        }
    }, [])

    const ref: any = useClickAway(() => {
        setIsOpen(false)
    })

    const handleClickButton = (): void => {
        setIsOpen((prev) => !prev)
        setClickStyle(!clickStyle)
    }

    const handleClear = (): void => {
        setRange([0, 300000])
    }

    const handleSave = (): void => {
        window.open(
            searchQueryConstructor({ ...search, minPrice: range[0].toString(), maxPrice: range[1].toString() }),
            '_self'
        )
    }

    const handleChange = (_event: Event, newValue: number | number[]): void => {
        setRange(newValue as number[])
    }

    return (
        <StyledContainer>
            <div ref={ref}>
                <div
                    ref={ref}
                    className={`searchContainer center-col sm:relative ${clickStyle ? 'clicked' : 'unclicked'}`}
                >
                    <Button
                        fullWidth
                        disableElevation
                        onClick={handleClickButton}
                        variant={isSmallScreen ? 'text' : 'contained'}
                        color={isSmallScreen ? 'primary' : 'warning'}
                        endIcon={isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    >
                        Price
                    </Button>
                </div>
                <Fade in={isOpen}>
                    <div className={`priceSearch ${isOpen ? 'flex' : 'hidden'}`}>
                        <Slider
                            value={range}
                            min={0}
                            max={300000}
                            step={1000}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                        />
                        <div className="minMax">
                            <div>
                                <p className="priceTitle">Min price</p>
                                <div className="amountContainer">
                                    <p>{range[0].toLocaleString()}</p>
                                    <p>USD</p>
                                </div>
                            </div>
                            <div>
                                <p className="priceTitle">Max price</p>
                                <div className="amountContainer">
                                    <p>
                                        {range[1] === 300000
                                            ? `${range[1].toLocaleString()}+`
                                            : range[1].toLocaleString()}
                                    </p>
                                    <p>USD</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttonsContainer">
                            <Button onClick={handleClear} variant="contained" color="secondary">
                                Clear
                            </Button>
                            <Button onClick={handleSave} variant="contained">
                                Save
                            </Button>
                        </div>
                    </div>
                </Fade>
            </div>
        </StyledContainer>
    )
}

export { SelectOptionPrice }
