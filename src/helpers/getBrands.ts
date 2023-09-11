import { useAppSelector } from '../reducers/redux/store'

type Brands = Record<string, string[]>

const getBrands = (): Brands => {
    const { watches } = useAppSelector((state) => state.watch)
    const brands: Brands = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: [],
    }
    watches.forEach((watch) => {
        const char = watch.brand[0].toUpperCase()
        brands[char].push(watch.brand)
    })

    for (const key in brands) {
        if (brands[key].length > 0) {
            brands[key] = [...new Set<string>(brands[key])]
        }
    }
    return brands
}

export { getBrands }
