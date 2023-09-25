import { type IWatch } from '../types/WatchInterface'
import { useAppSelector } from '../reducers/redux/store'
import { WatchQueryProcessor } from './watchQueryProcessor/watchQueryProcessor'

const filterResult = (validParams: string[][] | undefined): IWatch[] | undefined => {
    let result: IWatch[] | undefined
    const watchesQueryProcessor = new WatchQueryProcessor(useAppSelector((state) => state.watch))
    if (validParams !== undefined) {
        validParams.forEach((param) => {
            result = watchesQueryProcessor.sortBy(result, param[0] as keyof IWatch, param[1])
        })
    }
    return []
}

export { filterResult }
