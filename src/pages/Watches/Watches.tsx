import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { UseSelectOptionProcessor } from '../../components/SearchBar/useSelectOptionProcessor'
import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { WatchCard } from '../../components/WatchCard/WatchCard'
import { readQueryString } from '../../helpers/readQueryString'
import { includeInSearch, initialState } from '../../reducers/redux/searchSlice'
import { useAppDispatch, useAppSelector } from '../../reducers/redux/store'
import { type IWatch } from '../../types/WatchInterface'
import { filterResult } from './filterResults'
import { searchQueryConstructor } from './searchQueryConstructor'
import CircularProgress from '@mui/material/CircularProgress'

const Watches: React.FC = () => {
    const search = useAppSelector((state) => state.search)
    const { watchesData } = useAppSelector((state) => state.watch)
    const [flag, setFlag] = useState<boolean>(false)
    const [result, setResult] = useState<IWatch[] | undefined>(undefined)
    const [searchParams] = useSearchParams()
    const options = UseSelectOptionProcessor(watchesData?.watches)
    const paramObj = readQueryString(searchParams, search, options)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (flag) {
            searchQueryConstructor(search)
            setResult(filterResult(search, watchesData?.watches))
        } else {
            // restart the search state
            dispatch(includeInSearch(initialState))
            // add search params to state
            dispatch(includeInSearch(paramObj))
            setFlag(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flag])

    return (
        <div>
            <SearchBar options={options} />

            <SearchKeywordsBar />

            {!flag && <CircularProgress />}

            {result !== undefined ? (
                result?.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)
            ) : (
                <h2>Nothing Found</h2>
            )}
        </div>
    )
}
export { Watches }
