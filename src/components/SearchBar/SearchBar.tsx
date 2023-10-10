import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { isKeywordDuplicate } from '../../helpers/isKeywordDuplicate'
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption'
import { type IOptions } from '../../types/OptionInterface'

interface SearchBarProps {
    options: IOptions
}

const SearchBar: React.FC<SearchBarProps> = ({ options }) => {
    const handleSelection = (title: string, item: string): void => {
        //! la logica de busqueda de multi, lo demas funciona
        if (title === 'brand' || title === 'gender') {
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
                } else if (value.length > 0) {
                    return (
                        <CustomSelectOption
                            key={uuidv4()}
                            title={key}
                            items={value}
                            isMulti={!(key === 'gender' || key === 'brand')}
                            handleSelection={handleSelection}
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
