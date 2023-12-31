import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Badge, Button } from '@mui/material'
import Collapse from '@mui/material/Collapse'
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
    const [clickStyle, setClickStyle] = useState(false)

    const handleClick = (): void => {
        setIsOpen((prev) => !prev)
        setClickStyle(!clickStyle)
    }

    const ref: any = useClickAway(() => {
        setClickStyle(false)
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
        <StyledContainer ref={ref}>
            <Badge badgeContent={badgeCounter} color="primary" invisible={!isMulti} sx={{ width: '90%' }}>
                <div onClick={handleClick} className={`title ${clickStyle ? 'clicked' : 'unclicked'}`}>
                    <p>{_.startCase(title)}</p>
                    {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
            </Badge>
            <div className={`space hidden sm:block ${isOpen ? 'border1' : 'border2'}`}></div>
            <div className={`searchContainer relative  ${isOpen ? 'flex' : 'hidden'}`}>
                <Collapse in={isOpen} timeout={700}>
                    <ul>
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
                            <div className="buttonsContainer">
                                <Button onClick={handleClear} variant="contained" color="secondary">
                                    Clear
                                </Button>
                                <Button onClick={handleSave} variant="contained" disabled={selectedItems.length === 0}>
                                    Save
                                </Button>
                            </div>
                        )}
                    </ul>
                </Collapse>
            </div>
        </StyledContainer>
    )
}
export { CustomSelectOption }
