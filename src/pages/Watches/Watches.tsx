import CircularProgress from '@mui/material/CircularProgress'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { UseSelectOptionProcessor } from '../../components/SearchBar/useSelectOptionProcessor'
import { SearchKeywordsBar } from '../../components/SearchKeywordsBar/SearchKeywordsBar'
import { WatchCard } from '../../components/WatchCard/WatchCard'
import { readQueryString } from '../../helpers/readQueryString'
import { editSearch, initialState } from '../../reducers/redux/searchSlice'
import { useAppDispatch, useAppSelector } from '../../reducers/redux/store'
import { type IWatch } from '../../types/WatchInterface'
import { filterResult } from './filterResults'
import _ from 'lodash'

const Watches: React.FC = () => {
    const search = useAppSelector((state) => state.search)
    const [flag, setFlag] = useState(false)
    const { watchesData, brandsData } = useAppSelector((state) => state.watch)
    const [result, setResult] = useState<IWatch[] | undefined>(undefined)
    const [searchParams] = useSearchParams()
    const options = UseSelectOptionProcessor(watchesData?.watches)
    const paramObj = readQueryString(searchParams, search, options)
    const dispatch = useAppDispatch()

    const brandDescription = (): string | undefined => {
        if (search.brand !== '') {
            console.log(search.brand)
            const targetBrand = brandsData?.brands.filter((brand) => _.lowerCase(brand.name) === search.brand)
            if (targetBrand !== undefined) {
                return targetBrand[0].description
            }
        }
    }

    brandDescription()

    useEffect(() => {
        if (flag) {
            setResult(filterResult(search, watchesData?.watches))
        } else {
            // restart the search state
            dispatch(editSearch(initialState))
            // add search params to state
            dispatch(editSearch(paramObj))
            setFlag(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flag])

    return (
        <div>
            {brandDescription()}
            <SearchBar options={options} />

            <SearchKeywordsBar />

            {flag ? (
                result !== undefined && result.length > 0 ? (
                    result?.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)
                ) : (
                    <h2>Nothing Found</h2>
                )
            ) : (
                <CircularProgress />
            )}
        </div>
    )
}
export { Watches }
