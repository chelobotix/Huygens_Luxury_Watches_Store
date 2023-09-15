interface IWatch {
    id: number
    name: string
    brand: string
    price: number
    gender: string
    video: string
    reference?: string
    collection?: string
    caseSize?: string
    caseMaterial?: string
    movement?: string
    caliber?: string
    powerReserve?: string
    dateAdded?: Date
    dialColor?: string
    dialMaterial?: string
    caseBack?: string
    strapMaterial?: string
    strapColor?: string
    buckleType?: string
    specialFeature: string[]
    thumbnails: string[]
    images: string[]
}

export { type IWatch }
