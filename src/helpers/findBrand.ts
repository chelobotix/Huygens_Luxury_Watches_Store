import { useAppSelector } from '../reducers/redux/store'
import { type Watch } from '../reducers/redux/WatchesInterface'

const findBrand = (target: string): Watch[] => {
    const { watches } = useAppSelector((state) => state.watch)

    const brandResult: Watch[] = watches.filter((watch) => watch.brand === target)
    return brandResult
}

export { findBrand }
