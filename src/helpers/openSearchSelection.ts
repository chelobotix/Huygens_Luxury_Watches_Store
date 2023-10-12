import { isKeywordDuplicate } from '../pages/Watches/isKeywordDuplicate'
import _ from 'lodash'

const openSearchSelection = (title: string, item: string): void => {
    if (_.lowerCase(title) === 'price') {
        console.log('price')
    } else {
        if (item === 'nothing') {
            const newLocation = window.location.href.replace(`${title}=nothing`, '')
            window.open(isKeywordDuplicate(newLocation, title, item), '_self')
        } else {
            window.open(isKeywordDuplicate(window.location.href, title, item), '_self')
        }
    }
}

export { openSearchSelection }
