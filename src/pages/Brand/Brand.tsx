import { Link, useParams } from 'react-router-dom'
import { findBrand } from '../../helpers/findBrand'
import { type Watch } from '../../reducers/redux/watchInterface'
import { v4 as uuidv4 } from 'uuid'
import { WatchCard } from '../../components/WatchCard/WatchCard'

const Brand: React.FC = () => {
    let watches: Watch[] | null = null
    const { brand } = useParams()
    if (brand !== undefined) {
        watches = findBrand(brand)
    }

    return (
        <div>
            <ul>
                {watches !== null && watches.length >= 1 ? (
                    watches.map((watch) => <WatchCard key={uuidv4()} watch={watch} />)
                ) : (
                    <li>
                        <h2>Brand not found</h2>
                        <Link to={`/brands/`}>Return to Brands</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
export { Brand }
