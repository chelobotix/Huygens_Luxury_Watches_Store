import { SelectOptionInput } from '../SelectOptionInput/SelectOptionInput'
import { selectOptionProcessor } from './selectOptionProcessor'
import { v4 as uuidv4 } from 'uuid'

const SearchBar: React.FC = () => {
    const options = selectOptionProcessor()
    console.log('options', options)
    return (
        <div>
            {Object.entries(options).map(([key, value]) => (
                <SelectOptionInput key={uuidv4()} options={value} label={key} />
            ))}
        </div>
    )
}
export { SearchBar }
