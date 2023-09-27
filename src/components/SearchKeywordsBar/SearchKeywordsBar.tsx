import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { keywordProcessor } from './keywordProcessor'

interface SearchKeywordsBarProps {
    validParams: Record<string, string>
}

const SearchKeywordsBar: React.FC<SearchKeywordsBarProps> = ({ validParams }) => {
    const [searchKeywords, setSearchKeyword] = useState<Record<string, string>>(validParams)

    return (
        <div>
            <ul>
                {Object.entries(searchKeywords).map((searchKeyword) => (
                    <li
                        onClick={() => {
                            handleRemoveSearchKey(searchKeyword[0])
                        }}
                        key={uuidv4()}
                    >
                        {keywordProcessor(searchKeyword[0], searchKeyword[1], searchKeywords)}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export { SearchKeywordsBar }
