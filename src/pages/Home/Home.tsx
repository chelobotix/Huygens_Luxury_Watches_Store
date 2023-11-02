import { MainHeading } from '../../components/MainHeading/MainHeading'
import { WatchCard } from '../../components/WatchCard/WatchCard'
import { useAppSelector } from '../../reducers/redux/store'
import { v4 as uuidv4 } from 'uuid'

const Home: React.FC = () => {
    const { watchesData } = useAppSelector((state) => state.watch)
    return (
        <>
            <MainHeading />
            <div className="flex justify-center">
                <ul className="ulWatchCard">
                    {watchesData?.watches.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)}
                </ul>
            </div>
        </>
    )
}
export { Home }
