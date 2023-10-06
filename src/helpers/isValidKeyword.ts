import { type ISearch } from '../types/SearchInterface'
import { useAppSelector } from '../reducers/redux/store'

function isValidKeyword(key: string): boolean {
    const search = useAppSelector((state) => state.search)
    if (key in search) {
        return true
    }
    return false
}

export { isValidKeyword }
