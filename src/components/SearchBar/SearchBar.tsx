import { type MultiValue, type SingleValue } from 'react-select'
import { SelectOptionInput } from '../SelectOptionInput/SelectOptionInput'
import { selectOptionProcessor } from './selectOptionProcessor'
import { v4 as uuidv4 } from 'uuid'
import { isKeywordDuplicate } from '../../helpers/isKeywordDuplicate'
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption'

interface SearchBarProps {
    validParams: Record<string, string> | undefined
}

const SearchBar: React.FC<SearchBarProps> = ({ validParams }) => {
    const options = selectOptionProcessor()

    const handleSelection = (
        event: SingleValue<{ value: string; label: string }> | MultiValue<{ value: string; label: string }>,
        label: string
    ): void => {
        if (event !== null && typeof event !== 'undefined') {
            // Check if Selection is Multiple or Single
            if (Array.isArray(event)) {
                let joinValue = ''
                event.forEach((item, index) => {
                    if ('value' in item) {
                        if (index < event.length - 1) {
                            joinValue += `${item.value},`
                        } else {
                            joinValue += item.value
                        }
                    }
                })
                window.open(isKeywordDuplicate(window.location.href, label, joinValue), '_self')
            } else {
                if ('value' in event) {
                    if (label === 'brand') {
                        window.open(isKeywordDuplicate(window.location.href, label, event.value), '_self')
                    } else if (label === 'gender') {
                        window.open(isKeywordDuplicate(window.location.href, label, event.value), '_self')
                    } else if (label === 'price') {
                        console.log('otroooo')
                    }
                }
            }
        }
    }

    return (
        <div>
            {Object.entries(options).map(([key, value]) => {
                console.log(key, value)
                if (key === 'price') {
                    return false
                } else {
                    if (key === 'gender' || key === 'brand') {
                        return <CustomSelectOption key={uuidv4()} title={key} items={value} isMulti={false} />
                    } else {
                        return <CustomSelectOption key={uuidv4()} title={key} items={value} isMulti={true} />
                    }
                }
            })}
        </div>
    )
}
export { SearchBar }
