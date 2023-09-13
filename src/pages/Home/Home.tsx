import { WatchCard } from '../../components/WatchCard/WatchCard'
import { useAppSelector } from '../../reducers/redux/store'
import { v4 as uuidv4 } from 'uuid'

const Home: React.FC = () => {
    const { data } = useAppSelector((state) => state.watch)

    if (data !== null) {
        console.log(data.watches)
    }
    return <ul>{data?.watches.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)}</ul>
}
export { Home }
