import { fetchWatchesGet, type GlobalState } from '../reducers/redux/watchSlice'
import { useAppSelector, useAppDispatch } from '../reducers/redux/store'
import { useEffect } from 'react'

const watchesURL = 'http://127.0.0.1:3000/api/v1/watches'
const brandsURL = 'http://127.0.0.1:3000/api/v1/brands'

const useReduxDataFetcher = (): GlobalState => {
    const state = useAppSelector((state) => state.watch)
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(fetchWatchesGet({ url: watchesURL, target: 'watches' }))
        void dispatch(fetchWatchesGet({ url: brandsURL, target: 'brands' }))
    }, [dispatch])

    return state
}

export { useReduxDataFetcher }
