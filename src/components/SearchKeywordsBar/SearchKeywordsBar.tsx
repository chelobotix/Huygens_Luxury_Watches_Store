import { type Keywords } from '../../pages/Watches/Watches'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

interface SearchKeywordsBarProps {
    keywordProps: Keywords[]
}

const SearchKeywordsBar: React.FC<SearchKeywordsBarProps> = ({ keywordProps }) => {
    const [keywords, setkeyword] = useState(keywordProps)
    return (
        <div>
            <ul>
                {keywords.map((keyword) =>
                    Object.keys(keyword).map((key) => (
                        <li key={uuidv4()}>{`${key}: ${keyword[key]}`}</li>
                    ))
                )}
            </ul>
        </div>
    )
}
export { SearchKeywordsBar }
