import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Badge, Button } from '@mui/material'
import Fade from '@mui/material/Fade'
import { useClickAway } from '@uidotdev/usehooks'
import _ from 'lodash'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { StyledContainer } from './CustomSelectOption.styled'

interface CustomSelectOptionProps {
    title: string
    items: string[]
    isMulti: boolean
    handleSelection: (title: string, item: string) => void
}

const CustomSelectOption: React.FC<CustomSelectOptionProps> = ({ title, items, isMulti, handleSelection }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [badgeCounter, setBadgeCounter] = useState<number>(0)
    console.log(selectedItems)

    const handleClickButton = (): void => {
        setIsOpen((prev) => !prev)
    }

    const ref: any = useClickAway(() => {
        setIsOpen(false)
    })

    const handleClickItem = (item: string): void => {
        if (isMulti) {
            if (selectedItems.includes(item)) {
                setSelectedItems((prev) => prev.filter((x) => x !== item))
                setBadgeCounter(badgeCounter - 1)
            } else {
                setSelectedItems((prev) => [...prev, _.camelCase(item)])
                setBadgeCounter(badgeCounter + 1)
            }
        } else {
            handleSelection(title, item)
        }
    }

    return (
        <StyledContainer>
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
                                className={selectedItems.includes(_.camelCase(item)) ? 'selected' : ''}
                            >
                                {item}
                            </li>
                        ))}
                        {isMulti && (
                            <div>
                                <Button
                                    onClick={() => {
                                        setSelectedItems([])
                                    }}
                                    variant="contained"
                                >
                                    Clear
                                </Button>
                                <Button
                                    onClick={() => {
                                        handleSelection(title, selectedItems.toString())
                                    }}
                                    variant="contained"
                                    disabled={selectedItems.length === 0}
                                >
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
