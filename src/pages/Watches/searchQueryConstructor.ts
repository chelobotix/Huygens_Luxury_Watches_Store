import { ISearch } from '../../types/SearchInterface'

const searchQueryConstructor = (search: ISearch): void => {
    const location = window.location
    const host = location.host
    const url = `${host}/watches?`
}

export { searchQueryConstructor }
