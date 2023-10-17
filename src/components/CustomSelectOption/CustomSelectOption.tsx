import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Badge, Button } from '@mui/material'
import Fade from '@mui/material/Fade'
import { useClickAway } from '@uidotdev/usehooks'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { StyledContainer } from './CustomSelectOption.styled'
import { useAppSelector } from '../../reducers/redux/store'
import { type ISearch } from '../../types/SearchInterface'
import { filterString } from '../../helpers/filterString'
import { getBadgeNumber } from '../../helpers/getBadgeNumber'
import { searchQueryConstructor } from '../../pages/Watches/searchQueryConstructor'

interface CustomSelectOptionProps {
    title: string
    items: string[]
    isMulti: boolean
}

const CustomSelectOption: React.FC<CustomSelectOptionProps> = ({ title, items, isMulti }) => {
    const search = useAppSelector((state) => state.search)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedItems, setSelectedItems] = useState<string>(search[title as keyof ISearch])
    const [badgeCounter, setBadgeCounter] = useState<number>(0)

    const handleClickButton = (): void => {
        setIsOpen((prev) => !prev)
    }

    const ref: any = useClickAway(() => {
        setIsOpen(false)
    })

    useEffect(() => {
        setBadgeCounter(getBadgeNumber(search[title as keyof ISearch]))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setBadgeCounter])

    const handleClickItem = (item: string): void => {
        if (isMulti) {
            if (selectedItems.includes(item)) {
                const newParamString = filterString(selectedItems, item)
                setSelectedItems(newParamString)
                setBadgeCounter(badgeCounter - 1)
            } else {
                if (selectedItems === '') {
                    setSelectedItems(item)
                } else {
                    setSelectedItems(`${selectedItems},${_.lowerCase(item)}`)
                }

                setBadgeCounter(badgeCounter + 1)
            }
        } else {
            window.open(searchQueryConstructor({ ...search, [title]: item }), '_self')
        }
    }

    const handleSave = (): void => {
        window.open(searchQueryConstructor({ ...search, [title]: selectedItems }), '_self')
    }

    const handleClear = (): void => {
        setSelectedItems('')
        setBadgeCounter(0)
        setIsOpen(false)
        window.open(searchQueryConstructor({ ...search, [title]: '' }), '_self')
    }

    return (
        <StyledContainer>
            <div ref={ref} className="divAbsolute">
                <Badge badgeContent={badgeCounter} color="primary" invisible={!isMulti}>
                    <Button
                        onClick={handleClickButton}
                        variant="outlined"
                        endIcon={isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        style={{ textTransform: 'none' }}
                    >
                        {_.startCase(title)}
                    </Button>
                </Badge>

                <Fade in={isOpen}>
                    <ul className={isOpen ? 'visible' : 'invisible'}>
                        {items.map((item) => (
                            <li
                                onClick={() => {
                                    handleClickItem(item)
                                }}
                                key={uuidv4()}
                                className={selectedItems.includes(_.lowerCase(item)) ? 'selected' : ''}
                            >
                                {_.startCase(item)}
                            </li>
                        ))}
                        {isMulti && (
                            <div>
                                <Button onClick={handleClear} variant="contained">
                                    Clear
                                </Button>
                                <Button onClick={handleSave} variant="contained" disabled={selectedItems.length === 0}>
                                    Save
                                </Button>
                            </div>
                        )}
                    </ul>
                </Fade>
            </div>
        </StyledContainer>
    )
}
export { CustomSelectOption }
