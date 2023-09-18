import { useLocation } from 'react-router-dom'
import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'

type Keywords = Record<string, string>

const Watches: React.FC = () => {
    const location = useLocation()
    const searchKeywords = new URLSearchParams(location.search)
    const keywords: Keywords[] = []
    for (const [key, value] of searchKeywords.entries()) {
        keywords.push({ [key]: value })
    }

    return (
        <div>
            <SearchKeywordsBar keywords={keywords} />
            watches
        </div>
    )
}
export { Watches, type Keywords }
