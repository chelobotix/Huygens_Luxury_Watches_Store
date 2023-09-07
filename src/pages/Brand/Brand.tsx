import { useParams } from 'react-router-dom'

const Brand: React.FC = () => {
    const { brand } = useParams()
    return <div>{brand}</div>
}
export { Brand }
