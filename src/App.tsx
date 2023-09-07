import { useEffect } from 'react'
import { fetchDataGet } from './reducers/redux/watchSlice'
import { useAppDispatch, useAppSelector } from './reducers/redux/store'
import AppRouter from './routers/AppRouter'

const App: React.FC = () => {
    const { isLoading } = useAppSelector((state) => state.watch)
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(fetchDataGet('./db.json'))
    }, [])

    return <>{isLoading ? <p>Loading...</p> : <AppRouter />}</>
}

export default App
