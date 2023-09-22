import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { useSearchParams } from 'react-router-dom'
import { readQuearyString } from '../../helpers/readQueryString'
import { SearchResult } from '../../components/SearchResult/SearchResult'

const Watches: React.FC = () => {
    const [searchParams] = useSearchParams()
    const keywords = readQuearyString(searchParams)
    // console.log('Watches', keywords)

    return (
        <div>
            <SearchKeywordsBar {...keywords} />
            <SearchResult keywords={keywords} />
        </div>
    )
}
export { Watches }
