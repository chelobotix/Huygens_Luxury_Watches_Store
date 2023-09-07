interface Watch {
    id: number
    name: string
    brand: string
    price: number
    features: {
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
    }
    specialFeatures: string[]
    video: string
    images: string[]
    thumbnails: string[]
}

export type { Watch }
