import { isValidKeyword } from './isValidKeyword'
import { includeInSearch } from '../reducers/redux/searchSlice'
import { type ISearch } from '../types/SearchInterface'

const readQueryString = (searchParams: URLSearchParams, search: ISearch, dispatch: any): void => {
    for (const entry of searchParams.entries()) {
        const [param, value] = entry
        if (isValidKeyword(param, search)) {
            dispatch(includeInSearch({ key: param as keyof ISearch, value }))
        }
    }
}

export { readQueryString }
