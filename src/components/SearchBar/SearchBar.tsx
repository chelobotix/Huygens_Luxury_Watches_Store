import { v4 as uuidv4 } from 'uuid'
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption'
import { type IOptions } from '../../types/OptionInterface'

interface SearchBarProps {
    options: IOptions
}

const SearchBar: React.FC<SearchBarProps> = ({ options }) => {
    return (
        <div>
            {Object.entries(options).map(([key, value]) => {
                if (key === 'price') {
                    return false
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
    )
}
export { SearchBar }
