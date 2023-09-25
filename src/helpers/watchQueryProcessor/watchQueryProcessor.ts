import { type GlobalState } from '../../reducers/redux/watchSlice'
import { type IBrands } from '../../types/BrandsInterface'
import { type IWatch } from '../../types/WatchInterface'
import { type IWatches } from '../../types/WatchesInterface'

class WatchQueryProcessor {
    brandsData: IBrands | null
    watchesData: IWatches | null

    constructor(state: GlobalState) {
        this.brandsData = state.brandsData
        this.watchesData = state.watchesData
    }

    sortBy(
        filteredResults: IWatch[] | undefined,
        keyword: keyof IWatch,
        searchCriteria: string
    ): IWatch[] | undefined {
        console.log(keyword)
        if (filteredResults === undefined && this.watchesData?.watches !== undefined) {
            filteredResults = this.#searchTarget(this.watchesData.watches, keyword, searchCriteria)
        } else {
            filteredResults = this.#searchTarget(filteredResults, keyword, searchCriteria)
        }

        console.log(filteredResults)
        return filteredResults
    }

    #searchTarget = (
        target: IWatch[] | undefined,
        keyword: keyof IWatch,
        searchCriteria: string
    ): IWatch[] | undefined => {
        const result = target?.filter((watch) => {
            if (keyword === 'price' && typeof watch[keyword] === 'number') {
                console.log(watch[keyword], parseInt(searchCriteria))
                return watch[keyword] === parseInt(searchCriteria)
            } else if (keyword === 'dateAdded') {
                return watch[keyword]?.toString() === searchCriteria
            } else if (typeof watch[keyword] === 'string') {
                return (watch[keyword] as string).toLowerCase() === searchCriteria.toLowerCase()
            }
            return false
        })
        return result
    }
}

export { WatchQueryProcessor }
