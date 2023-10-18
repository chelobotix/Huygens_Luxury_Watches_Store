import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { StyledContainer } from './CustomSelectOption.styled'
import { useClickAway } from '@uidotdev/usehooks'
import { Button, Fade } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { searchQueryConstructor } from '../../pages/Watches/searchQueryConstructor'
import { useAppSelector } from '../../reducers/redux/store'

const SelectOptionPrice: React.FC = () => {
    const search = useAppSelector((state) => state.search)

    let maxPrice = parseInt(search.maxPrice)
    if (parseInt(search.maxPrice) >= 300000) {
        maxPrice = 300000
    }
    const [range, setRange] = useState<number[]>([0, 300000])
    console.log('🚀 ~ file: SelectOptionPrice.tsx:18 ~ range:', range)

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
            <div ref={ref} className="divAbsolute">
                <Button
                    onClick={handleClickButton}
                    variant="outlined"
                    endIcon={isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    style={{ textTransform: 'none' }}
                >
                    Price
                </Button>
                <Fade in={isOpen}>
                    <div className={isOpen ? 'visible' : 'invisible'}>
                        <Slider
                            value={range}
                            min={0}
                            max={300000}
                            step={1000}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                        />
                        <div>
                            <div>
                                <p>Min price</p>
                                <div>
                                    <p>{range[0].toLocaleString()}</p>
                                    <p>USD</p>
                                </div>
                            </div>
                            <div>
                                <p>Max price</p>
                                <div>
                                    <p>
                                        {range[1] === 300000
                                            ? `${range[1].toLocaleString()}+`
                                            : range[1].toLocaleString()}
                                    </p>
                                    <p>USD</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button onClick={handleClear} variant="contained">
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
