import { type Keywords } from '../../pages/Watches/Watches'
import { v4 as uuidv4 } from 'uuid'

interface SearchKeywordsBarProps {
    keywords: Keywords[]
}

const SearchKeywordsBar: React.FC<SearchKeywordsBarProps> = ({ keywords }) => {
    console.log(keywords)
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
