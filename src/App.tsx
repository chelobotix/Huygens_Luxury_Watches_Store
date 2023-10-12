import { SkeletonLayout } from './components/Skeleton/SkeletonLayout'
import { useReduxDataFetcher } from './hooks/useReduxDataFetcher'
import AppRouter from './routers/AppRouter'

const App: React.FC = () => {
    const { isLoading, watchesData, brandsData } = useReduxDataFetcher()

    if (isLoading === 'idle' || isLoading === 'loading') {
        return <SkeletonLayout />
    } else if (isLoading === 'failed') {
        return <h2>Fetch Data error</h2>
    }

    return watchesData !== null && brandsData !== null && <AppRouter />
}

export default App
