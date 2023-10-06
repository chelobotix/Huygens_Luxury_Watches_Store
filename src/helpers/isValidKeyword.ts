import { type ISearch } from '../types/SearchInterface'

function isValidKeyword(key: string, search: ISearch): boolean {
    if (key in search) {
        return true
    }
    return false
}

export { isValidKeyword }
