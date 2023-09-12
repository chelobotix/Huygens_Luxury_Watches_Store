import { useReduxDataFetcher } from './hooks/useReduxDataFetcher'
import AppRouter from './routers/AppRouter'

const App: React.FC = () => {
    const { isLoading } = useReduxDataFetcher()

    return <>{isLoading ? <p>Loading...</p> : <AppRouter />}</>
}

export default App
