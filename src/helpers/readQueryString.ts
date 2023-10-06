import { isValidKeyword } from './isValidKeyword'
import { type ISearch } from '../types/SearchInterface'

const readQueryString = (searchParams: URLSearchParams, search: ISearch): Record<string, string> => {
    const paramObj: Record<string, string> = {}
    for (const entry of searchParams.entries()) {
        const [param, value] = entry
        if (isValidKeyword(param, search)) {
            paramObj[param] = value
        }
    }
    return paramObj
}

export { readQueryString }
