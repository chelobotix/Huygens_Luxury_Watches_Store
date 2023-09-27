import { type GlobalState } from '../../reducers/redux/watchSlice'
import { type IBrands } from '../../types/BrandsInterface'
import { type IWatch } from '../../types/WatchInterface'
import { type IWatches } from '../../types/WatchesInterface'
import { type ISearchModel } from '../isValidIWatchKey'

class WatchQueryProcessor {
    brandsData: IBrands | null
    watchesData: IWatches | null

    constructor(state: GlobalState) {
        this.brandsData = state.brandsData
        this.watchesData = state.watchesData
    }

    sortBy(
        filteredResults: IWatch[] | undefined,
        keyword: keyof ISearchModel,
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

    getPriceRange = (
        filteredResults: IWatch[] | undefined,
        minPrice: number,
        maxPrice: number
    ): IWatch[] | undefined => {
        const result = filteredResults?.filter(
            (watch) => watch.price >= minPrice && watch.price <= maxPrice
        )
        return result
    }

    #searchTarget = (
        target: IWatch[] | undefined,
        keyword: keyof ISearchModel,
        searchCriteria: string
    ): IWatch[] | undefined => {
        const result = target?.filter((watch) => {
            return (
                (watch[keyword as keyof IWatch] as string).toLowerCase() ===
                searchCriteria.toLowerCase()
            )
        })
        return result
    }
}

export { WatchQueryProcessor }
