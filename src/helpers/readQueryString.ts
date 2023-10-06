import { isValidKeyword } from './isValidKeyword'
import { includeInSearch } from '../reducers/redux/searchSlice'
import { type ISearch } from '../types/SearchInterface'

const readQueryString = (searchParams: URLSearchParams, search: ISearch, dispatch: any): void => {
    const paramObj: Record<string, string> = {}
    for (const entry of searchParams.entries()) {
        const [param, value] = entry
        if (isValidKeyword(param, search)) {
            paramObj[param] = value
        }
    }
    dispatch(includeInSearch(paramObj))
}

export { readQueryString }
