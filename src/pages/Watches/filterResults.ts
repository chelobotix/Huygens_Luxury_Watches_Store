import { getSearchParamNumber } from '../../helpers/getSearchParamNumber'
import { type ISearch } from '../../types/SearchInterface'
import { type IWatch } from '../../types/WatchInterface'

const filterResult = (search: ISearch, watches: IWatch[] | undefined): IWatch[] | undefined => {
    let result: IWatch[] | undefined
    const paramNumber = getSearchParamNumber(search)
    console.log('pn', paramNumber)
    //const watchesQueryProcessor = new WatchQueryProcessor(useAppSelector((state) => state.watch))

    return result
}

export { filterResult }
