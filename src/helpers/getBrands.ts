import { useAppSelector } from '../reducers/redux/store'

const getBrands = (): string[] => {
    const { watches } = useAppSelector((state) => state.watch)
    const brands = new Set<string>()
    watches.forEach((watch) => {
        brands.add(watch.brand)
    })
    return Array.from(brands).sort()
}

export { getBrands }
