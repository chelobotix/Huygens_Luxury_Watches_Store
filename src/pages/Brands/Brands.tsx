import { v4 as uuidv4 } from 'uuid'
import { alphabet } from '../../helpers/alphabet'
import { Link } from 'react-router-dom'
import { getBrands } from '../../helpers/getBrands'

const Brands: React.FC = () => {
    console.log(getBrands())
    return (
        <div>
            <h2>Huygens Brands A-Z</h2>
            <ul>
                {alphabet.map((char) => (
                    <li key={uuidv4()}>
                        <Link to={`#${char}`}>{char}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export { Brands }
