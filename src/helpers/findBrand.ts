import { useAppSelector } from '../reducers/redux/store'
import { type Watch } from '../reducers/redux/watchInterface'

const findBrand = (target: string): Watch[] => {
    const { watches } = useAppSelector((state) => state.watch)

    const brandResult: Watch[] = watches.filter((watch) => watch.brand === target)
    return brandResult
}

export { findBrand }
