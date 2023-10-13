import { v4 as uuidv4 } from 'uuid'
import { useAppSelector } from '../../reducers/redux/store'
import Chip from '@mui/material/Chip'
import { useEffect, useState } from 'react'
import { filteredKeywords } from './filteredKeywords'
import _ from 'lodash'
import { searchQueryConstructor } from '../../pages/Watches/searchQueryConstructor'

const SearchKeywordsBar: React.FC = () => {
    const search = useAppSelector((state) => state.search)
    const [keywords, setkeywords] = useState<string[] | null>(null)

    useEffect(() => {
        const result = filteredKeywords(search)
        setkeywords(result)
    }, [search])

    const handleRemoveSearchKey = (keyword: string): void => {
        if (keyword === `Men's` || keyword === `Women's`) {
            window.open(searchQueryConstructor({ ...search, gender: '' }), '_self')
        } else {
            window.open(searchQueryConstructor({ ...search, [_.camelCase(keyword)]: '' }), '_self')
        }
    }

    return (
        <div>
            <ul>
                {keywords?.map((keyword) => (
                    <li key={uuidv4()}>
                        <Chip
                            label={keyword}
                            onDelete={() => {
                                handleRemoveSearchKey(keyword)
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export { SearchKeywordsBar }
