import { type ISearch } from '../../types/SearchInterface'
import _ from 'lodash'

const filteredKeywords = (search: ISearch): string[] => {
    const result = Object.keys(search).filter((key) => search[key as keyof ISearch] !== '')

    // replace gender keyword for Men's or Women's and _.startCase the rest
    result.forEach((keyword, index) => {
        if (keyword === 'gender') {
            replaceGender(result, search)
        } else {
            result[index] = _.startCase(keyword)
        }
    })
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

export { filteredKeywords }
