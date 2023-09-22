import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { useSearchParams } from 'react-router-dom'
import { readQuearyString } from '../../helpers/readQueryString'
import { SearchResult } from '../../components/SearchResult/SearchResult'
import { WatchQueryProcessor } from '../../helpers/watchQueryProcessor/watchQueryProcessor'
import { useAppSelector } from '../../reducers/redux/store'
import { type IWatch } from '../../types/WatchInterface'

const Watches: React.FC = () => {
    const [searchParams] = useSearchParams()
    const keywords = readQuearyString(searchParams)
    let filteredResults: IWatch[] | undefined
    const watchesQueryProcessor = new WatchQueryProcessor(useAppSelector((state) => state.watch))
    filteredResults = watchesQueryProcessor.sortBy(filteredResults, 'gender', 'Male')
    filteredResults = watchesQueryProcessor.sortBy(filteredResults, 'brand', 'Audemars Piguet')
    console.log(filteredResults)
    return (
        <div>
            <SearchKeywordsBar {...keywords} />
            <SearchResult keywords={keywords} />
        </div>
    )
}
export { Watches }
