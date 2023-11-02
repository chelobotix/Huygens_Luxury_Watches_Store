import { v4 as uuidv4 } from 'uuid'
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption'
import { type IOptions } from '../../types/OptionInterface'
import { SelectOptionPrice } from '../CustomSelectOption/SelectOptionPrice'
import { ModalSearch } from '../ModalSearch/ModalSearch'
import { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import { Button } from '@mui/material'

interface SearchBarProps {
    options: IOptions
}

const SearchBar: React.FC<SearchBarProps> = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="center-row my-2 w-5/6 bg-softGray sm:hidden">
                <Button
                    onClick={() => {
                        setIsOpen(true)
                    }}
                    endIcon={<TuneIcon />}
                >
                    Filter
                </Button>
                <ModalSearch isOpen={isOpen} setIsOpen={setIsOpen}>
                    <div className="flex flex-col gap-2 py-2">
                        {Object.entries(options).map(([key, value]) => {
                            if (key === 'price') {
                                return <SelectOptionPrice key={uuidv4()} />
                            } else if (value.length > 0) {
                                return (
                                    <CustomSelectOption
                                        key={uuidv4()}
                                        title={key}
                                        items={value}
                                        isMulti={!(key === 'gender' || key === 'brand')}
                                    />
                                )
                            } else {
                                return null
                            }
                        })}
                    </div>
                </ModalSearch>
            </div>
            <div className="my-2 hidden w-full justify-center py-5 sm:flex sm:flex-wrap sm:gap-3 sm:bg-softYellow sm:shadow-inner xl:h-[80px]">
                {Object.entries(options).map(([key, value]) => {
                    if (key === 'price') {
                        return <SelectOptionPrice key={uuidv4()} />
                    } else if (value.length > 0) {
                        return (
                            <CustomSelectOption
                                key={uuidv4()}
                                title={key}
                                items={value}
                                isMulti={!(key === 'gender' || key === 'brand')}
                            />
                        )
                    } else {
                        return null
                    }
                })}
            </div>
        </>
    )
}
export { SearchBar }
