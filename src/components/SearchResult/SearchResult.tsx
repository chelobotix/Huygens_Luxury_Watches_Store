import { type IKeywords } from '../../types/KeywordInterface'

interface SearchResultProps {
    keywords: IKeywords
}

const SearchResult: React.FC<SearchResultProps> = ({ keywords }) => {
    // console.log('result', keywords)
    return (
        <div>
            <h2>Result</h2>
            {Object.entries(keywords).map((item) => item[1])}
        </div>
    )
}
export { SearchResult }
