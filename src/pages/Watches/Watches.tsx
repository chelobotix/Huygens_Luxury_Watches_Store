import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { useSearchParams } from 'react-router-dom'
import { readQueryString } from '../../helpers/readQueryString'
import { filterResult } from './filterResults'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { WatchCard } from '../../components/WatchCard/WatchCard'
import { v4 as uuidv4 } from 'uuid'

const Watches: React.FC = () => {
    const [searchParams] = useSearchParams()
    const validParams = readQueryString(searchParams)
    console.log('valid', validParams)
    const result = filterResult(validParams)
    return (
        <div>
            <SearchBar validParams={validParams} />
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
