import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import _ from 'lodash'

interface SearchKeywordsBarProps {
    validParams: Record<string, string>
}

const SearchKeywordsBar: React.FC<SearchKeywordsBarProps> = ({ validParams }) => {
    const [searchKeywords, setSearchKeyword] = useState<Record<string, string>>(validParams)

    const keywordProcessor = (keyword: string, value: string): string => {
        if (keyword === 'gender') {
            if (_.lowerCase(value) === 'male') {
                return "Men's"
            } else {
                return "Women's"
            }
        } else if (keyword === 'maxPrice') {
            if (!('minPrice' in searchKeywords)) {
                return `Up to ${parseInt(value).toLocaleString()} USD`
            } else {
                return `${parseInt(searchKeywords.minPrice).toLocaleString()} USD - ${parseInt(value).toLocaleString()} USD`
            }
        }

        return _.capitalize(keyword)
    }

    return (
        <div>
            <ul>
                {Object.entries(searchKeywords).map((searchKeyword) => (
                    <li
                        onClick={() => {
                            // handleClick(keyword[0] as keyof IKeywords)
                        }}
                        key={uuidv4()}
                    >
                        {keywordProcessor(searchKeyword[0], searchKeyword[1])}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export { SearchKeywordsBar }
