import { isValidKeyword } from './isValidKeyword'
import { type ISearch } from '../types/SearchInterface'
import _ from 'lodash'
import { type IOptions } from '../types/OptionInterface'

const readQueryString = (searchParams: URLSearchParams, search: ISearch, options: IOptions): Record<string, string> => {
    const paramObj: Record<string, string> = {}
    // convert all option items to lowercase to compare with value
    for (const entry of searchParams.entries()) {
        const [param, value] = entry
        if (isValidKeyword(param, search)) {
            const lowerOption = options[param as keyof IOptions].map((option) => _.lowerCase(option.toString()))
            if (lowerOption.includes(_.lowerCase(value))) {
                paramObj[param] = value
            }
        }
    }
    return paramObj
}

export { readQueryString }
