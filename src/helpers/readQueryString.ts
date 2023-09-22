import { type IKeywords, Gender, SortBy } from '../types/KeywordInterface'

const initialValue = {
    sortBy: null,
    brand: null,
    price: null,
    gender: null,
    caseMaterial: null,
    strapMaterial: null,
    dialColor: null,
    strapColor: null,
    movement: null,
}

const readQuearyString = (searchParams: URLSearchParams): IKeywords => {
    const keywords: IKeywords = initialValue
    for (const entry of searchParams.entries()) {
        const [param, value] = entry
        if (param in keywords) {
            console.log(param)
            switch (param) {
                case 'sortBy':
                    if (Object.keys(SortBy).includes(value as SortBy)) {
                        keywords.sortBy = SortBy[value as keyof typeof SortBy]
                    }
                    break
                case 'brand':
                    keywords.brand = value
                    break
                case 'price':
                    keywords.price = parseFloat(value) // Convert to number
                    break
                case 'gender':
                    if (Object.keys(Gender).includes(value as Gender)) {
                        keywords.gender = Gender[value as keyof typeof Gender]
                    }
                    break
                case 'caseMaterial':
                    keywords.caseMaterial = value
                    break
                case 'strapMaterial':
                    keywords.strapMaterial = value
                    break
                case 'dialColor':
                    keywords.dialColor = value
                    break
                case 'strapColor':
                    keywords.strapColor = value
                    break
                case 'movement':
                    keywords.movement = value as 'Automatic' | 'Connected' | 'Manual' | 'Quartz'
                    break
                default:
                    break
            }
        }
    }
    console.log('query', keywords)
    return keywords
}

export { readQuearyString }
