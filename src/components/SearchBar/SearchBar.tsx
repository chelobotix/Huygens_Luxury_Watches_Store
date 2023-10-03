import { type SingleValue } from 'react-select'
import { SelectOptionInput } from '../SelectOptionInput/SelectOptionInput'
import { selectOptionProcessor } from './selectOptionProcessor'
import { v4 as uuidv4 } from 'uuid'
import { isKeywordDuplicate } from '../../helpers/isKeywordDuplicate'

interface SearchBarProps {
    validParams: Record<string, string> | undefined
}

const SearchBar: React.FC<SearchBarProps> = ({ validParams }) => {
    const options = selectOptionProcessor()

    const handleSelection = (event: SingleValue<{ value: string; label: string }>, label: string): void => {
        if (event?.value !== undefined) {
            if (label === 'brand') {
                window.open(isKeywordDuplicate(window.location.href, label, event.value), '_self')
            } else if (label === 'gender') {
                window.open(isKeywordDuplicate(window.location.href, label, event.value), '_self')
            } else {
                console.log(event)
            }
        }
    }

    return (
        <div>
            {Object.entries(options).map(([key, value]) => (
                <SelectOptionInput key={uuidv4()} options={value} label={key} handleSelection={handleSelection} />
            ))}
        </div>
    )
}
export { SearchBar }
