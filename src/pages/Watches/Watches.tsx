import { useParams } from 'react-router-dom'

const Watches: React.FC = () => {
    const { terms } = useParams()
    console.log(terms)
    return <div>watches</div>
}
export { Watches }
