import _ from 'lodash'
import { isKey } from '../../helpers/isKey'
import { type IOptions } from '../../types/OptionInterface'
import { type IWatch } from '../../types/WatchInterface'

const options: IOptions = {
    brand: [],
    gender: ['male', 'female'],
    price: ['0'],
    caseMaterial: [],
    movement: [],
    dialColor: [],
    caseBack: [],
    strapMaterial: [],
    strapColor: [],
}

const UseSelectOptionProcessor = (watches: IWatch[] | undefined): IOptions => {
    // Get all options from the API
    watches?.forEach((watch) => {
        if (watch.brand !== undefined) {
            options.brand.push(_.lowerCase(watch.brand))
        }
        if (watch.caseMaterial !== undefined) {
            options.caseMaterial.push(_.lowerCase(watch.caseMaterial))
        }
        if (watch.movement !== undefined) {
            options.movement.push(_.lowerCase(watch.movement))
        }
        if (watch.dialColor !== undefined) {
            options.dialColor.push(_.lowerCase(watch.dialColor))
        }
        if (watch.caseBack !== undefined) {
            options.caseBack.push(_.lowerCase(watch.caseBack))
        }
        if (watch.strapMaterial !== undefined) {
            options.strapMaterial.push(_.lowerCase(watch.strapMaterial))
        }
        if (watch.strapColor !== undefined) {
            options.strapColor.push(_.lowerCase(watch.strapColor))
        }
    })

    // Remove duplicates
    Object.entries(options).forEach(([key, value]) => {
        if (Array.isArray(value) && isKey(options, key)) {
            options[key] = _.union(value)
        }
    })

    return options
}

export { UseSelectOptionProcessor }
