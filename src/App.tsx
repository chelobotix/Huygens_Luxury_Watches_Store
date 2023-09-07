import { Home } from './pages/Home/Home'
import { useEffect } from 'react'
import { fetchDataGet } from './reducers/redux/watchSlice'
import { useAppDispatch, useAppSelector } from './reducers/redux/store'

function App(): JSX.Element {
    const { isLoading } = useAppSelector((state) => state.watch)
    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(fetchDataGet('./db.json'))
    }, [])

    return isLoading ? <p>Loading...</p> : <Home />
}

export default App
