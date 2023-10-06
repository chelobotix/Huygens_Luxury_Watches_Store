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
import { watch } from 'fs'

const Watches: React.FC = () => {
    const search = useAppSelector((state) => state.search)
    const { watchesData } = useAppSelector((state) => state.watch)
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        // readQueryString(searchParams, search, dispatch)
        dispatch(includeInSearch({ key: 'brand', value: 'pigget' }))
    }, [dispatch])

    useEffect(() => {
        console.log(search)
    }, [search])

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
