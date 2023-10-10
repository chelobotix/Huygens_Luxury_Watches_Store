import { isKey } from '../../helpers/isKey'
import { useAppSelector } from '../../reducers/redux/store'
import _ from 'lodash'
import { type IOptions } from '../../types/OptionInterface'
import { IWatch } from '../../types/WatchInterface'

const options: IOptions = {
    brand: [],
    price: [],
    gender: ['Male', 'Female'],
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
            options.brand.push(watch.brand)
        }
        if (watch.caseMaterial !== undefined) {
            options.caseMaterial.push(watch.caseMaterial)
        }
        if (watch.movement !== undefined) {
            options.movement.push(watch.movement)
        }
        if (watch.dialColor !== undefined) {
            options.dialColor.push(watch.dialColor)
        }
        if (watch.caseBack !== undefined) {
            options.caseBack.push(watch.caseBack)
        }
        if (watch.strapMaterial !== undefined) {
            options.strapMaterial.push(watch.strapMaterial)
        }
        if (watch.strapColor !== undefined) {
            options.strapColor.push(watch.strapColor)
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
