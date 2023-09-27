import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'

interface SearchKeywordsBarProps {
    validParams: string[][] | undefined
}

const SearchKeywordsBar: React.FC<SearchKeywordsBarProps> = ({ validParams }) => {
    const [keywords, setkKeyword] = useState<string[][] | undefined>(validParams)
    const navigate = useNavigate()
    const firstRenderRef = useRef(true)

    const keywordProcessor = (keyword: string, value: string): string => {
        if (keyword === 'gender') {
            if (_.lowerCase(value) === 'male') {
                return "Men's"
            } else {
                return "Women's"
            }
        }
        return _.capitalize(keyword)
    }

    //const handleClick = (key: keyof IKeywords): void => {
    // const { [key]: propToDelete, ...rest } = keywords
    // setkKeyword(rest)
    //}

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
        } else {
            navigate('/watches?genre=chizo&brand=jojo')
        }
    }, [keywords, navigate])

    return (
        <div>
            <ul>
                {keywords?.map((keyword) => (
                    <li
                        onClick={() => {
                            // handleClick(keyword[0] as keyof IKeywords)
                        }}
                        key={uuidv4()}
                    >
                        {keywordProcessor(keyword[0], keyword[1])}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export { SearchKeywordsBar }
