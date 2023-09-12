import { fetchDataGet, type WatchState } from '../reducers/redux/watchSlice'
import { useAppSelector, useAppDispatch } from '../reducers/redux/store'
import { useEffect } from 'react'

const useReduxDataFetcher = (): WatchState => {
    const state = useAppSelector((state) => state.watch)
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log('effect inside')
        void dispatch(fetchDataGet('./db.json'))
    }, [])

    return state
}

export { useReduxDataFetcher }
