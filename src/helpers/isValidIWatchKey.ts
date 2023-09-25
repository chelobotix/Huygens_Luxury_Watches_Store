import { type IWatch } from '../types/WatchInterface'

const SearchModel: Record<keyof IWatch, undefined> = {
    name: undefined,
    brand: undefined,
    price: undefined,
    gender: undefined,
    reference: undefined,
    collection: undefined,
    caseSize: undefined,
    caseMaterial: undefined,
    movement: undefined,
    caliber: undefined,
    powerReserve: undefined,
    dateAdded: undefined,
    dialColor: undefined,
    dialMaterial: undefined,
    caseBack: undefined,
    strapMaterial: undefined,
    strapColor: undefined,
    buckleType: undefined,
    id: undefined,
    video: undefined,
    images: undefined,
    thumbnails: undefined,
    specialFeature: undefined,
}

function isValidIWatchKey(key: string): boolean {
    if (key in SearchModel) {
        return true
    }
    return false
}

export { isValidIWatchKey }
