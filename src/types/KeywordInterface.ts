enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
}

enum SortBy {
    RELEVANCE = 'Relevance',
    LOWEST = 'Lowest Price',
    HIGHEST = 'Highest Price',
}
interface IKeywords {
    sortBy: SortBy | null
    brand: string | null
    price: number | null
    gender: Gender | null
    caseMaterial: string | null
    strapMaterial: string | null
    dialColor: string | null
    strapColor: string | null
    movement: 'Automatic' | 'Connected' | 'Manual' | 'Quartz' | null
}

export { type IKeywords, Gender, SortBy }
