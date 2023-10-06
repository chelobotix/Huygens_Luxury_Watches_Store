import { type ISearch } from '../types/SearchInterface'

const getSearchParamNumber = (search: ISearch): number => {
    let counter = 0
    Object.entries(search).forEach((item) => {
        const [, value] = item
        if (value.length > 0) {
            counter++
        }
    })
    return counter
}

export { getSearchParamNumber }
