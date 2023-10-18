import { type ISearch } from '../../types/SearchInterface'
import { type IWatch } from '../../types/WatchInterface'
import _ from 'lodash'

let result: IWatch[] | undefined

const filterType = (source: IWatch[] | undefined, type: string, search: ISearch, key: string, value: any): void => {
    if (type === 'minPrice') {
        if (parseInt(search.maxPrice) >= 300000) {
            result = source?.filter(
                (watch) => watch.price >= parseInt(search.minPrice) && watch.price <= Number.MAX_SAFE_INTEGER
            )
        } else {
            result = source?.filter(
                (watch) => watch.price >= parseInt(search.minPrice) && watch.price <= parseInt(search.maxPrice)
            )
        }
    } else if (type === 'multiple') {
        const target = value.split(',').map((item: string) => _.camelCase(item))
        result = source?.filter((watch) => target.includes(_.camelCase(watch[key as keyof IWatch] as string)))
    } else if (type === 'other' && key !== 'maxPrice') {
        result = source?.filter((watch) => _.camelCase(watch[key as keyof IWatch] as string) === _.camelCase(value))
    }
}
//! revisar el initial state con 300000 pq esta filtrando los que son superiores

const filterResult = (search: ISearch, watches: IWatch[] | undefined): IWatch[] | undefined => {
    Object.entries(search).forEach((item) => {
        const [key, value] = item
        if (value !== '') {
            if (key === 'minPrice') {
                if (result === undefined) {
                    filterType(watches, 'minPrice', search, key, value)
                } else {
                    filterType(result, 'minPrice', search, key, value)
                }
            } else if (value.includes(',') === true) {
                if (result === undefined) {
                    filterType(watches, 'multiple', search, key, value)
                } else {
                    filterType(result, 'multiple', search, key, value)
                }
            } else if (key !== 'maxPrice') {
                if (result === undefined) {
                    filterType(watches, 'other', search, key, value)
                } else {
                    filterType(result, 'other', search, key, value)
                }
            }
        }
    })

    if (result === undefined) {
        result = watches
    }

    return result
}

export { filterResult }
