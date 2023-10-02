import { useSearchParams } from 'react-router-dom'
import { readQueryString } from './readQueryString'

const getQueryString = () => {
    const [searchParams] = useSearchParams()
    return readQueryString(searchParams)
}

export { getQueryString }
