interface ISearchModel {
    name: string | undefined
    brand: string | undefined
    minPrice: number | undefined
    maxPrice: number | undefined
    gender: string | undefined
    caseMaterial: string | undefined
    movement: string | undefined
    caliber: string | undefined
    powerReserve: string | undefined
    dialColor: string | undefined
    dialMaterial: string | undefined
    caseBack: string | undefined
    strapMaterial: string | undefined
    strapColor: string | undefined
}

const SearchModel: ISearchModel = {
    name: undefined,
    brand: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    gender: undefined,
    caseMaterial: undefined,
    movement: undefined,
    caliber: undefined,
    powerReserve: undefined,
    dialColor: undefined,
    dialMaterial: undefined,
    caseBack: undefined,
    strapMaterial: undefined,
    strapColor: undefined,
}

function isValidIWatchKey(key: string): boolean {
    if (key in SearchModel) {
        return true
    }
    return false
}

export { isValidIWatchKey, type ISearchModel }
