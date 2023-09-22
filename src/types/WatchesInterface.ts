import { type IWatch } from './WatchInterface'

interface IWatches {
    [x: string]: any
    status: string
    watches: IWatch[]
}

export { type IWatches }
