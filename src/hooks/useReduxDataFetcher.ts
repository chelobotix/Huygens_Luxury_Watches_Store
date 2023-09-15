import { fetchWatchesGet, type GlobalState } from '../reducers/redux/watchSlice'
import { useAppSelector, useAppDispatch } from '../reducers/redux/store'
import { useEffect } from 'react'

const useReduxDataFetcher = (): GlobalState => {
    const state = useAppSelector((state) => state.watch)
    const dispatch = useAppDispatch()
    const watchesURL = 'http://127.0.0.1:3000/api/v1/watches'
    // const brandsURL = 'http://127.0.0.1:3000/api/v1/watches'

    useEffect(() => {
        void dispatch(fetchWatchesGet(watchesURL))
    }, [])

    return state
}

export { useReduxDataFetcher }
