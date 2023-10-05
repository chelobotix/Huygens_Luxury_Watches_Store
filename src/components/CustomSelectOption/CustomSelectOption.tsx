import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useClickAway } from '@uidotdev/usehooks'
import Fade from '@mui/material/Fade'
import { Badge, Button } from '@mui/material'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { StyledContainer } from './CustomSelectOption.styled'
import _ from 'lodash'

interface CustomSelectOptionProps {
    title: string
    items: Array<{ value: string; label: string }>
    isMulti: boolean
}
const multiItems: { title: string; items: Array<{ value: string; label: string }> } = { title: '', items: [] }

const CustomSelectOption: React.FC<CustomSelectOptionProps> = ({ title, items, isMulti }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [badgeCounter, setBadgeCounter] = useState<number>(0)

    const handleClickButton = (): void => {
        setIsOpen((prev) => !prev)
    }

    const ref: any = useClickAway(() => {
        setIsOpen(false)
    })

    const handleClickItem = (item: { value: string; label: string }): void => {
        if (isMulti) {
            if (selectedItems.includes(item.label)) {
                setSelectedItems((prev) => prev.filter((x) => x !== item.label))
                multiItems.items = multiItems.items.filter((x) => x.label !== item.label)
                setBadgeCounter(badgeCounter - 1)
            } else {
                setSelectedItems((prev) => [...prev, item.label])
                multiItems.items.push(item)
                setBadgeCounter(badgeCounter + 1)
            }
        } else {
            // console.log(item)
        }
    }

    return (
        <StyledContainer isVisible={isOpen} isMulti={isMulti}>
            <div className="divAbsolute">
                <Badge badgeContent={badgeCounter} color="primary">
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
                    <ul ref={ref} className={isOpen ? 'visible' : 'invisible'}>
                        {items.map((item) => (
                            <li
                                onClick={() => {
                                    handleClickItem(item)
                                }}
                                key={uuidv4()}
                                className={selectedItems.includes(item.label) ? 'selected' : ''}
                            >
                                {item.label}
                            </li>
                        ))}
                        {isMulti && (
                            <div>
                                <Button variant="contained">Clear</Button>
                                <Button variant="contained">Save</Button>
                            </div>
                        )}
                    </ul>
                </Fade>
            </div>
        </StyledContainer>
    )
}
export { CustomSelectOption }
