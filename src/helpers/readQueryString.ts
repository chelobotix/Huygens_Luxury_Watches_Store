import { isValidKeyword } from './isValidKeyword'
import { type ISearch } from '../types/SearchInterface'
import _, { isNumber } from 'lodash'
import { type IOptions } from '../types/OptionInterface'

const readQueryString = (searchParams: URLSearchParams, search: ISearch, options: IOptions): Record<string, string> => {
    const paramObj: Record<string, string> = {}

    for (const entry of searchParams.entries()) {
        const [param, value] = entry

        if (isValidKeyword(param, search)) {
            if (value.includes(',')) {
                const values = value.split(',')
                const validValues = values.filter((value) => {
                    if (options[param as keyof IOptions].includes(_.lowerCase(value))) {
                        return true
                    }
                    return false
                })
                paramObj[param] = validValues.join(',')
            } else {
                if (param === 'minPrice' && isNumber(parseInt(value))) {
                    paramObj[param] = value
                } else if (param === 'maxPrice' && isNumber(parseInt(value))) {
                    paramObj[param] = value
                } else if (options[param as keyof IOptions].includes(_.lowerCase(value))) {
                    paramObj[param] = _.lowerCase(value)
                }
            }
        }
    }
    if (!('minPrice' in paramObj)) {
        paramObj.minPrice = '0'
    }
    if (!('maxPrice' in paramObj)) {
        paramObj.maxPrice = '300000'
    }

    return paramObj
}

export { readQueryString }
