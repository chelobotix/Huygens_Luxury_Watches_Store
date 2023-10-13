import { isKeywordDuplicate } from '../pages/Watches/isKeywordDuplicate'
import _ from 'lodash'
import { searchQueryConstructor } from '../pages/Watches/searchQueryConstructor'
import { type ISearch } from '../types/SearchInterface'

const openSearchSelection = (title: string, search: ISearch): void => {
    if (_.lowerCase(title) === 'price') {
        console.log('price')
    } else {
        window.open(searchQueryConstructor, '_self')
    }
}

export { openSearchSelection }
