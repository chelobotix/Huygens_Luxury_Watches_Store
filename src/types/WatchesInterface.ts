import { type IWatch } from './WatchInterface'

interface IWatches {
    [key: string]: any
    status: string
    watches: IWatch[]
}

export { type IWatches }
