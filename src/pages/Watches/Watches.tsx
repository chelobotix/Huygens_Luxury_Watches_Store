import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { useSearchParams } from 'react-router-dom'
import { readQuearyString } from '../../helpers/readQueryString'

const Watches: React.FC = () => {
    const [searchParams] = useSearchParams()
    const keywords = readQuearyString(searchParams)
    console.log('render', keywords)

    return (
        <div>
            <SearchKeywordsBar {...keywords} />
        </div>
    )
}
export { Watches }
