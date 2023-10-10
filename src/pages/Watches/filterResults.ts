import { type ISearch } from '../../types/SearchInterface'
import { type IWatch } from '../../types/WatchInterface'
import _ from 'lodash'

const filterResult = (search: ISearch, watches: IWatch[] | undefined): IWatch[] | undefined => {
    let result: IWatch[] | undefined
    Object.entries(search).forEach((item) => {
        const [key, value] = item
        if (value !== '') {
            if (value.includes(',') === true) {
                const target = value.split(',').map((item: string) => _.camelCase(item))

                if (result === undefined) {
                    result = watches?.filter((watch) =>
                        target.includes(_.camelCase(watch[key as keyof IWatch] as string))
                    )
                } else {
                    result = result.filter((watch) =>
                        target.includes(_.camelCase(watch[key as keyof IWatch] as string))
                    )
                }
            } else {
                if (result === undefined) {
                    result = watches?.filter(
                        (watch) => _.camelCase(watch[key as keyof IWatch] as string) === _.camelCase(value)
                    )
                } else {
                    result = result.filter(
                        (watch) => _.camelCase(watch[key as keyof IWatch] as string) === _.camelCase(value)
                    )
                }
            }
        }
    })

    return result
}

export { filterResult }
