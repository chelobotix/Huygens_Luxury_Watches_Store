import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { useSearchParams } from 'react-router-dom'
import { readQueryString } from '../../helpers/readQueryString'
import { filterResult } from './filterResults'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { WatchCard } from '../../components/WatchCard/WatchCard'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch, useAppSelector } from '../../reducers/redux/store'
import { includeInSearch } from '../../reducers/redux/searchSlice'
import { useEffect } from 'react'

const Watches: React.FC = () => {
    const search = useAppSelector((state) => state.search)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(includeInSearch({ key: 'gender', value: 'Male' }))
        dispatch(includeInSearch({ key: 'gender', value: 'Female' }))
        console.log('search', search)
    }, [])

    const [searchParams] = useSearchParams()
    const validParams = readQueryString(searchParams)
    console.log('wv', validParams)
    const result = filterResult(validParams)
    return (
        <div>
            {/* <SearchBar validParams={validParams} />
            {validParams !== null && <SearchKeywordsBar validParams={validParams as Record<string, string>} />}
            {result !== undefined && result.length > 0 ? (
                result?.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)
            ) : (
                <h2>Nothing found</h2>
            )} */}
        </div>
    )
}
export { Watches }
