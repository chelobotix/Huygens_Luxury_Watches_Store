import { useAppSelector } from '../../reducers/redux/store'
import _ from 'lodash'

interface IOptions {
    brand: Array<{ value: string; label: string }>
    price: number[] | string[]
    gender: Array<{ value: string; label: string }>
    caseMaterial: Array<{ value: string; label: string }>
    movement: Array<{ value: string; label: string }>
    dialColor: Array<{ value: string; label: string }>
    caseBack: Array<{ value: string; label: string }>
    strapMaterial: Array<{ value: string; label: string }>
    strapColor: Array<{ value: string; label: string }>
}

const options: IOptions = {
    brand: [],
    price: [],
    gender: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ],
    caseMaterial: [],
    movement: [],
    dialColor: [],
    caseBack: [],
    strapMaterial: [],
    strapColor: [],
}

const selectOptionProcessor = (): IOptions => {
    const { watchesData } = useAppSelector((state) => state.watch)

    // get all options from the API
    watchesData?.watches.forEach((watch) => {
        if (watch.brand !== undefined) {
            options.brand.push({ value: watch.brand, label: watch.brand })
        }
        if (watch.caseMaterial !== undefined) {
            options.caseMaterial.push({ value: watch.caseMaterial, label: watch.caseMaterial })
        }
        if (watch.movement !== undefined) {
            options.movement.push({ value: watch.movement, label: watch.movement })
        }
        if (watch.dialColor !== undefined) {
            options.dialColor.push({ value: watch.dialColor, label: watch.dialColor })
        }
        if (watch.caseBack !== undefined) {
            options.caseBack.push({ value: watch.caseBack, label: watch.caseBack })
        }
        if (watch.strapMaterial !== undefined) {
            options.strapMaterial.push({ value: watch.strapMaterial, label: watch.strapMaterial })
        }
        if (watch.strapColor !== undefined) {
            options.strapColor.push({ value: watch.strapColor, label: watch.strapColor })
        }
    })

    Object.entries(options).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            options[key as keyof IOptions] = _.unionBy(value, 'value')
        }
    })

    return options
}

export { selectOptionProcessor }
