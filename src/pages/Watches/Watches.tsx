import { useSearchParams } from 'react-router-dom'
import { readQueryString } from '../../helpers/readQueryString'
import { filterResult } from './filterResults'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { WatchCard } from '../../components/WatchCard/WatchCard'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch, useAppSelector } from '../../reducers/redux/store'
import { includeInSearch } from '../../reducers/redux/searchSlice'
import { useEffect, useState } from 'react'
import { type IWatch } from '../../types/WatchInterface'
import { UseSelectOptionProcessor } from '../../components/SearchBar/useSelectOptionProcessor'

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
            setResult(filterResult(search, watchesData?.watches))
        } else {
            dispatch(includeInSearch(paramObj))
            setFlag(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flag])

    return (
        <div>
            <SearchBar options={options} />

            {/* {validParams !== null && <SearchKeywordsBar validParams={validParams as Record<string, string>} />} */}
            {result !== undefined ? (
                result?.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}
export { Watches }
