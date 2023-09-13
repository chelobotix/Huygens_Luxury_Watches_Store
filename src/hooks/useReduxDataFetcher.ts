import { fetchDataGet, type WatchState } from '../reducers/redux/watchSlice'
import { useAppSelector, useAppDispatch } from '../reducers/redux/store'
import { useEffect } from 'react'

const useReduxDataFetcher = (): WatchState => {
    const state = useAppSelector((state) => state.watch)
    const dispatch = useAppDispatch()
    const db = 'http://127.0.0.1:3000/api/v1/watches'

    useEffect(() => {
        void dispatch(fetchDataGet(db))
    }, [])

    return state
}

export { useReduxDataFetcher }
