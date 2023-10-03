import { type GlobalState } from '../../reducers/redux/watchSlice'
import { type IBrands } from '../../types/BrandsInterface'
import { type IWatch } from '../../types/WatchInterface'
import { type IWatches } from '../../types/WatchesInterface'
import { type ISearchModel } from '../isValidIWatchKey'
import _ from 'lodash'

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
        console.log('Query processor, sort by', searchCriteria)
        const searchCriteriaSplited = this.#isComposed(searchCriteria)

        if (filteredResults === undefined && this.watchesData?.watches !== undefined) {
            filteredResults = this.#searchTarget(this.watchesData.watches, keyword, searchCriteriaSplited)
        } else {
            filteredResults = this.#searchTarget(filteredResults, keyword, searchCriteriaSplited)
        }

        console.log('filteredResutl', filteredResults)
        return filteredResults
    }

    getPriceRange = (
        filteredResults: IWatch[] | undefined,
        minPrice: number,
        maxPrice: number
    ): IWatch[] | undefined => {
        const result = filteredResults?.filter((watch) => watch.price >= minPrice && watch.price <= maxPrice)
        return result
    }

    // #Private

    // Check if param is single or composed with multiple values
    #isComposed(searchCriteria: string): string | string[] {
        if (searchCriteria.includes(',')) {
            return searchCriteria.split(',').map((item) => _.lowerCase(item))
        }
        return searchCriteria
    }

    #searchTarget = (
        target: IWatch[] | undefined,
        keyword: keyof ISearchModel,
        searchCriteria: string | string[]
    ): IWatch[] | undefined => {
        let result
        if (typeof searchCriteria === 'string') {
            result = target?.filter((watch) => {
                return _.lowerCase(watch[keyword as keyof IWatch] as string) === _.lowerCase(searchCriteria)
            })
        } else {
            result = target?.filter((watch) => {
                return searchCriteria.includes(_.lowerCase(watch[keyword as keyof IWatch] as string))
            })
        }
        return result
    }
}

export { WatchQueryProcessor }
