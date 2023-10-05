import { isKey } from '../../helpers/isKey'
import { useAppSelector } from '../../reducers/redux/store'
import _ from 'lodash'

interface IOptions {
    brand: string[]
    price: number[] | string[]
    gender: string[]
    caseMaterial: string[]
    movement: string[]
    dialColor: string[]
    caseBack: string[]
    strapMaterial: string[]
    strapColor: string[]
}

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

const selectOptionProcessor = (): IOptions => {
    const { watchesData } = useAppSelector((state) => state.watch)

    // Get all options from the API
    watchesData?.watches.forEach((watch) => {
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

export { selectOptionProcessor }
