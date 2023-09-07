import { useAppSelector } from '../../reducers/redux/store'
import { v4 as uuidv4 } from 'uuid'
import { numberWithCommas } from '../../helpers/numberWithComma'
import { imgPath } from '../../helpers/imgPath'

const WatchCard: React.FC = () => {
    const { watches } = useAppSelector((state) => state.watch)
    return (
        <ul>
            {watches.map((watch) => {
                return (
                    <li key={uuidv4()}>
                        <p>
                            <a href="">LIKE</a>
                        </p>
                        <img src={imgPath(watch.brand, watch.name, watch.images[0])} alt="" width="250px" />
                        <p>{watch.features.reference}</p>
                        <p>{watch.brand}</p>
                        <p>{watch.name}</p>
                        <p>{`${numberWithCommas(watch.price)} USD`}</p>
                    </li>
                )
            })}
        </ul>
    )
}
export { WatchCard }
