import { type ISearch } from '../../types/SearchInterface'

const searchQueryConstructor = (search: ISearch): string => {
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
    console.log(window.location.protocol)
    return `/watches?${query}`
}

export { searchQueryConstructor }
