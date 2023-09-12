import { useAppSelector } from '../reducers/redux/store'
import { type Watch } from '../reducers/redux/watchInterface'

const findBrand = (target: string): Watch[] => {
    const { watches } = useAppSelector((state) => state.watch)
    console.log('target', target)
    if (watches === undefined) {
        window.location.replace('/brands')
    }
    const brandResult: Watch[] = watches.filter((watch) => watch.brand === target)
    console.log(brandResult)
    return brandResult
}

export { findBrand }
