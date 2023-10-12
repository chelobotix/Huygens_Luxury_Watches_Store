import { type ISearch } from '../../types/SearchInterface'

const searchQueryConstructor = (search: ISearch): string => {
    const location = window.location
    let query = ''

    // Generate string query
    Object.entries(search).forEach(([key, value]) => {
        if (search[key as keyof ISearch] !== '') {
            if (query === '') {
                query += `${key}=${value}`
            } else {
                query += `&${key}=${value}`
            }
        }
    })
    return `${location.host}/watches?${query}`
}

export { searchQueryConstructor }
