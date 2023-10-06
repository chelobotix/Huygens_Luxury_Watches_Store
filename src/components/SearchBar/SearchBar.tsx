import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { isKeywordDuplicate } from '../../helpers/isKeywordDuplicate'
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption'
import { selectOptionProcessor } from './selectOptionProcessor'

interface SearchBarProps {
    validParams: Record<string, string> | undefined
}

// const searchSelection: Array<{ label: string; items: Array<{ value: string; label: string }> }> = []

const SearchBar: React.FC<SearchBarProps> = ({ validParams }) => {
    console.log('valid', validParams)

    const options = selectOptionProcessor()
    console.log('option', options)

    const handleSelection = (title: string, item: string): void => {
        if (_.lowerCase(title) === 'brand' || _.lowerCase(title) === 'gender') {
            window.open(isKeywordDuplicate(window.location.href, title, item), '_self')
        } else if (_.lowerCase(title) === 'price') {
            console.log('price')
        } else {
            window.open(isKeywordDuplicate(window.location.href, title, item), '_self')
        }
    }
    return (
        <div>
            {Object.entries(options).map(([key, value]) => {
                if (key === 'price') {
                    return false
                } else {
                    if (key === 'gender' || key === 'brand') {
                        return (
                            <CustomSelectOption
                                key={uuidv4()}
                                title={key}
                                items={value}
                                isMulti={false}
                                handleSelection={handleSelection}
                            />
                        )
                    } else {
                        return (
                            <CustomSelectOption
                                key={uuidv4()}
                                title={key}
                                items={value}
                                isMulti={true}
                                handleSelection={handleSelection}
                            />
                        )
                    }
                }
            })}
        </div>
    )
}
export { SearchBar }
