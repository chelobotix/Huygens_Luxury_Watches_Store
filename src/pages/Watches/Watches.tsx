import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { useSearchParams } from 'react-router-dom'
import { SearchResult } from '../../components/SearchResult/SearchResult'
import { readQueryString } from '../../helpers/readQueryString'
import { filterResult } from '../../helpers/filterResults'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { WatchCard } from '../../components/WatchCard/WatchCard'
import { v4 as uuidv4 } from 'uuid'

const Watches: React.FC = () => {
    const [searchParams] = useSearchParams()
    const validParams = readQueryString(searchParams)
    const result = filterResult(validParams)
    console.log('result', result)
    return (
        <div>
            <SearchBar />
            {validParams !== null && <SearchKeywordsBar validParams={validParams as Record<string, string>} />}
            {result !== undefined && result.length > 0 ? (
                result?.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)
            ) : (
                <h2>Nothing found</h2>
            )}
        </div>
    )
}
export { Watches }
