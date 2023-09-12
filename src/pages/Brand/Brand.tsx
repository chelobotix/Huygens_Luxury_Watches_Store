import { useParams, useNavigate } from 'react-router-dom'
import { findBrand } from '../../helpers/findBrand'
import { useAppSelector } from '../../reducers/redux/store'

const Brand: React.FC = () => {
    const { watches, isLoading } = useAppSelector((state) => state.watch)

    const { brand } = useParams()

    return <div>{watches === undefined ? <p>Loading...</p> : <p>{watches[0].name}</p>}</div>
}
export { Brand }
