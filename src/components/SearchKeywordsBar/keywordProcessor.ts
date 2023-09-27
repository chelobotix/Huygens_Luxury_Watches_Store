import _ from 'lodash'

const keywordProcessor = (keyword: string, value: string, searchKeywords: Record<string, string>): string | null => {
    if (keyword === 'gender') {
        if (_.lowerCase(value) === 'male') {
            return "Men's"
        } else {
            return "Women's"
        }
    } else if (keyword === 'brand') {
        return `Brand: ${value}`
    } else if (keyword === 'maxPrice') {
        if (!('minPrice' in searchKeywords)) {
            return `Up to ${parseInt(value).toLocaleString()} USD`
        } else {
            return `${parseInt(searchKeywords.minPrice).toLocaleString()} USD - ${parseInt(value).toLocaleString()} USD`
        }
    } else if (keyword === 'minPrice') {
        return null
    } else if (
        keyword === 'powerReserve' ||
        keyword === 'caseSize' ||
        keyword === 'caseMaterial' ||
        keyword === 'dialColor' ||
        keyword === 'dialMaterial' ||
        keyword === 'strapColor' ||
        keyword === 'strapMaterial' ||
        keyword === 'buckleType' ||
        keyword === 'caseBack'
    ) {
        return _.startCase(keyword)
    }

    return _.capitalize(keyword)
}

export { keywordProcessor }
