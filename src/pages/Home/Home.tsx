import { createTheme, useMediaQuery } from '@mui/material'
import { HeadingContent } from '../../components/HeadingContent/HeadingContent'
import { MainHeading } from '../../components/MainHeading/MainHeading'
import { WatchCard } from '../../components/WatchCard/WatchCard'
import { useAppSelector } from '../../reducers/redux/store'
import { v4 as uuidv4 } from 'uuid'

const Home: React.FC = () => {
    const { watchesData } = useAppSelector((state) => state.watch)
    // Detect screen size
    const theme = createTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(640))

    return (
        <>
            {isSmallScreen ? (
                <div>
                    <MainHeading />
                    <HeadingContent color="#ffffff" backgroundColor="#CF2C5C" width="200px" />
                </div>
            ) : (
                <MainHeading>
                    <HeadingContent backgroundColor="#ffffff" color="#000000" width="320px" />
                </MainHeading>
            )}

            <div className="flex justify-center">
                <ul className="ulWatchCard">
                    {watchesData?.watches.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)}
                </ul>
            </div>
        </>
    )
}
export { Home }
