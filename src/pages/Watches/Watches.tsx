import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { useSearchParams } from 'react-router-dom'
import { SearchResult } from '../../components/SearchResult/SearchResult'
import { readQueryString } from '../../helpers/readQueryString'
import { filterResult } from '../../helpers/filterResults'

const Watches: React.FC = () => {
    const [searchParams] = useSearchParams()
    const validParams = readQueryString(searchParams)
    filterResult(validParams)

    return <div></div>
}
export { Watches }
