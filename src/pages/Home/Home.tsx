import { useAppSelector } from '../../reducers/redux/store'
import { v4 as uuidv4 } from 'uuid'

const Home: React.FC = () => {
    const { watches, isLoading } = useAppSelector((state) => state.watch)

    isLoading ||
        console.log(`./images/PatekPhilippe/GrandComplicationsMInuteRepeater,WorldTime/${watches[0].images[0]}`)
    return (
        <ul>
            {watches.map((watch) => {
                const nameFolder = watch.name.replace(/\s/g, '')
                const brandFolder = watch.brand.replace(/\s/g, '')
                const path = `./images/${brandFolder}/${nameFolder}/`
                return (
                    <li key={uuidv4()}>
                        <p>{watch.brand}</p>
                        <p>{watch.name}</p>
                        {watch.thumbnails.map((item) => {
                            console.log(`${path}${item}`)
                            return <img key={uuidv4()} src={`${path}${item}`} />
                        })}
                    </li>
                )
            })}
        </ul>
    )
}
export { Home }
