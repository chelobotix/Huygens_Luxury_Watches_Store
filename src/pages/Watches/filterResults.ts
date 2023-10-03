import { type IWatch } from '../../types/WatchInterface'
import { useAppSelector } from '../../reducers/redux/store'
import { WatchQueryProcessor } from '../../helpers/watchQueryProcessor/watchQueryProcessor'
import { type ISearchModel } from '../../helpers/isValidIWatchKey'

const filterResult = (validParams: Record<string, string> | undefined): IWatch[] | undefined => {
    let result: IWatch[] | undefined
    const watchesQueryProcessor = new WatchQueryProcessor(useAppSelector((state) => state.watch))

    if (validParams !== undefined) {
        Object.entries(validParams).forEach((param) => {
            if ((param[0] as keyof ISearchModel) !== 'minPrice' && (param[0] as keyof ISearchModel) !== 'maxPrice') {
                result = watchesQueryProcessor.sortBy(result, param[0] as keyof ISearchModel, param[1])
            }
        })
        if ('maxPrice' in validParams) {
            if ('minPrice' in validParams && parseInt(validParams.minPrice) > 100) {
                result = watchesQueryProcessor.getPriceRange(
                    result,
                    parseInt(validParams.minPrice),
                    parseInt(validParams.maxPrice)
                )
            } else {
                result = watchesQueryProcessor.getPriceRange(result, 100, parseInt(validParams.maxPrice))
            }
        }
    }
    return result
}

export { filterResult }
