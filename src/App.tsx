import { SkeletonLayout } from './components/Skeleton/SkeletonLayout'
import { useReduxDataFetcher } from './hooks/useReduxDataFetcher'
import AppRouter from './routers/AppRouter'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider } from '@mui/material'
import { lightStyled } from './themes/lightStyled'
import { lightMui } from './themes/lightMui'

const App: React.FC = () => {
    const { isLoading, watchesData, brandsData } = useReduxDataFetcher()

    if (isLoading === 'idle' || isLoading === 'loading') {
        return <SkeletonLayout />
    } else if (isLoading === 'failed') {
        return <h2>Fetch Data error</h2>
    }

    return (
        watchesData !== null &&
        brandsData !== null && (
            <ThemeProvider theme={lightMui}>
                <StyledThemeProvider theme={lightStyled}>
                    <AppRouter />
                </StyledThemeProvider>
            </ThemeProvider>
        )
    )
}

export default App
