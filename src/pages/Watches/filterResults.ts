import { type ISearch } from '../../types/SearchInterface'
import { type IWatch } from '../../types/WatchInterface'

const filterResult = (search: ISearch, watches: IWatch[] | undefined): IWatch[] | undefined => {
    let result: IWatch[] | undefined
    const params: Array<{ key: string; value: string }> = []

    Object.entries(search).forEach((item) => {
        const [key, value] = item
        if (value.length > 0) {
            params.push({ key, value: value.toString() })
        }
    })
    console.log('params', params)

    return result
}

export { filterResult }
