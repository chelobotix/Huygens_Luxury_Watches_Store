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

    sortByGender(filteredResults: IWatch[] | undefined, gender: string): IWatch[] | undefined {
        filteredResults = this.watchesData?.watches.filter((watch) => watch.gender === gender)
        if (Array.isArray(filteredResults) && filteredResults.length > 0) {
            return filteredResults
        }
        return undefined
    }

    sortByBrand(filteredResults: IWatch[] | undefined, brand: string): IWatch[] | undefined {
        filteredResults = this.watchesData?.watches.filter((watch) => watch.brand === brand)
        if (Array.isArray(filteredResults) && filteredResults.length > 0) {
            return filteredResults
        }
        return undefined
    }

    sortBy(
        filteredResults: IWatch[] | undefined,
        keyword: keyof IWatch,
        searchCriteria: string
    ): IWatch[] | undefined {
        filteredResults = this.watchesData?.watches.filter(
            (watch) => watch[keyword] === searchCriteria
        )
        if (Array.isArray(filteredResults) && filteredResults.length > 0) {
            return filteredResults
        }
        return undefined
    }
}

export { WatchQueryProcessor }
