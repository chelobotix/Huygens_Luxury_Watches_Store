import { useAppSelector } from '../reducers/redux/store'

type Alphabet = Record<string, string[]>

const BrandsbyAlphabet = (): Alphabet => {
    const { brandsData } = useAppSelector((state) => state.watch)
    const alphabet: Alphabet = {
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
    if (brandsData !== null) {
        brandsData.brands.forEach((brand) => {
            const char = brand.name[0].toUpperCase()
            alphabet[char].push(brand.name)
        })
    }
    return alphabet
}

export { BrandsbyAlphabet }
