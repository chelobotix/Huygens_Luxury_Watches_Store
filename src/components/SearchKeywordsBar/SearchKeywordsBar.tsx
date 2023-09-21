import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface SearchKeywordsBarProps {
    brand?: string
    genre?: string
}

const SearchKeywordsBar: React.FC<SearchKeywordsBarProps> = (props) => {
    const [keywords, setkKeyword] = useState<SearchKeywordsBarProps>(props)
    const navigate = useNavigate()
    const firstRenderRef = useRef(true)

    const handleClick = (key: keyof SearchKeywordsBarProps): void => {
        const { [key]: propToDelete, ...rest } = keywords
        setkKeyword(rest)
    }

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
                {Object.entries(keywords).map((keyword) => (
                    <li
                        onClick={() => {
                            handleClick(keyword[0] as keyof SearchKeywordsBarProps)
                        }}
                        key={uuidv4()}
                    >{`${keyword[0]}, ${keyword[1]}`}</li>
                ))}
            </ul>
        </div>
    )
}
export { SearchKeywordsBar }
