import { isKeywordDuplicate } from '../pages/Watches/isKeywordDuplicate'
import _ from 'lodash'

const openSearchSelection = (title: string, item: string): void => {
    if (title === 'brand' || title === 'gender') {
        window.open(isKeywordDuplicate(window.location.href, title, item), '_self')
    } else if (_.lowerCase(title) === 'price') {
        console.log('price')
    } else {
        window.open(isKeywordDuplicate(window.location.href, title, item), '_self')
    }
}

export { openSearchSelection }
