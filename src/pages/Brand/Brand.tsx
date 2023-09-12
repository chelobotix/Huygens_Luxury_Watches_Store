// import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../reducers/redux/store'

const Brand: React.FC = () => {
    const { watches } = useAppSelector((state) => state.watch)

    // const { brand } = useParams()

    return <div>{watches === undefined ? <p>Loading...</p> : <p>{watches[0].name}</p>}</div>
}
export { Brand }
