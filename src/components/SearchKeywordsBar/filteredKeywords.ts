import { type ISearch } from '../../types/SearchInterface'
import _ from 'lodash'

const filteredKeywords = (search: ISearch): string[] => {
    let result = Object.keys(search).filter((key) => search[key as keyof ISearch] !== '')

    // replace gender keyword for Men's or Women's and _.startCase the rest
    result.forEach((keyword, index) => {
        if (keyword === 'gender') {
            replaceGender(result, search)
        } else if (keyword === 'minPrice') {
            replacePrice(result, search)
        } else if (keyword !== 'maxPrice') {
            result[index] = _.startCase(keyword)
        }
    })
    // filter out the minPrice and maxPrice tags
    result = result.filter((item) => item !== 'minPrice' && item !== 'maxPrice')
    return result
}

const replaceGender = (keywordsArray: string[], search: ISearch): string[] => {
    const genderIndex = keywordsArray.indexOf('gender')
    if (search.gender === 'male') {
        keywordsArray[genderIndex] = `Men's`
    } else {
        keywordsArray[genderIndex] = `Women's`
    }
    return keywordsArray
}

const replacePrice = (keywordsArray: string[], search: ISearch): string[] => {
    if (parseInt(search.maxPrice) >= 300000) {
        keywordsArray.push(`From ${search.minPrice} USD`)
    } else {
        keywordsArray.push(`${search.minPrice} USD - ${search.maxPrice} USD`)
    }
    return keywordsArray
}

export { filteredKeywords }
