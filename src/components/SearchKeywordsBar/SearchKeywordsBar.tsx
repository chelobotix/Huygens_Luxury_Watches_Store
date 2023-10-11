import { v4 as uuidv4 } from 'uuid'
import { useAppSelector } from '../../reducers/redux/store'
import { type ISearch } from '../../types/SearchInterface'
import Chip from '@mui/material/Chip'
import _ from 'lodash'

const SearchKeywordsBar: React.FC = () => {
    const search = useAppSelector((state) => state.search)

    const handleRemoveSearchKey = (): void => {}

    return (
        <div>
            <ul>
                {Object.entries(search).map(([key, value]) => {
                    if (search[key as keyof ISearch] !== '') {
                        return (
                            <li
                                onClick={() => {
                                    handleRemoveSearchKey()
                                }}
                                key={uuidv4()}
                            >
                                <Chip label={_.startCase(key)} onDelete={handleRemoveSearchKey} />
                            </li>
                        )
                    }
                    return null
                })}
            </ul>
        </div>
    )
}
export { SearchKeywordsBar }
