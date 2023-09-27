import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState, useRef } from 'react'
import { keywordProcessor } from './keywordProcessor'
import { useNavigate } from 'react-router-dom'

interface SearchKeywordsBarProps {
    validParams: Record<string, string>
}

const SearchKeywordsBar: React.FC<SearchKeywordsBarProps> = ({ validParams }) => {
    const [searchKeywords, setSearchKeyword] = useState<Record<string, string>>(validParams)
    const navigate = useNavigate()
    const firstRender = useRef(true)

    const handleRemoveSearchKey = (keyword: string): void => {
        const { [keyword]: keyToDelete, ...rest } = searchKeywords
        setSearchKeyword(rest)
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            let newQueryString = '/watches?'
            Object.entries(searchKeywords).forEach((keyword, index) => {
                index === 0
                    ? (newQueryString += `${encodeURIComponent(keyword[0])}=${encodeURIComponent(keyword[1])}`)
                    : (newQueryString += `&${encodeURIComponent(keyword[0])}=${encodeURIComponent(keyword[1])}`)
            })
            console.log(newQueryString)
            navigate(newQueryString)
        }
    }, [searchKeywords])

    return (
        <div>
            <ul>
                {Object.entries(searchKeywords).map((searchKeyword) => {
                    // if searchKeywoerd is equal to minPrice return null
                    if (keywordProcessor(searchKeyword[0], searchKeyword[1], searchKeywords) !== null) {
                        return (
                            <li
                                onClick={() => {
                                    handleRemoveSearchKey(searchKeyword[0])
                                }}
                                key={uuidv4()}
                            >
                                {keywordProcessor(searchKeyword[0], searchKeyword[1], searchKeywords)}
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
