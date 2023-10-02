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

    const handleSingleSelection = (event: SingleValue<{ value: string; label: string }>, label: string): void => {
        if (label === 'brand' && event?.value !== undefined) {
            window.open(isKeywordDuplicate(window.location.href, label, event.value), '_self')
        } else if (label === 'gender' && event?.value !== undefined) {
            window.open(isKeywordDuplicate(window.location.href, label, event.value), '_self')
        }
    }

    return (
        <div>
            {Object.entries(options).map(([key, value]) => (
                <SelectOptionInput
                    key={uuidv4()}
                    options={value}
                    label={key}
                    handleSingleSelection={handleSingleSelection}
                />
            ))}
        </div>
    )
}
export { SearchBar }
