import { useAppSelector } from '../../reducers/redux/store'

const Home: React.FC = () => {
    const { watches, isLoading } = useAppSelector((state) => state.watch)

    isLoading ||
        console.log(`./images/PatekPhilippe/GrandComplicationsMInuteRepeater,WorldTime/${watches[0].images[0]}`)
    return (
        <div>
            <p>{watches[0].name}</p>
            <img
                src={`./images/PatekPhilippe/GrandComplicationsMInuteRepeater,WorldTime/${watches[0].images[0]}`}
                alt=""
            />
        </div>
    )
}
export { Home }
