import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { useSearchParams } from 'react-router-dom'
import { readQuearyString } from '../../helpers/readQueryString'

type IKeywords = Record<string, string>

const Watches: React.FC = () => {
    const [searchParams] = useSearchParams()
    const keywords = readQuearyString(searchParams)
    console.log(keywords)

    return (
        <div>
            <SearchKeywordsBar keywordProps={keywords} />
        </div>
    )
}
export { Watches }
