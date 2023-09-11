import { v4 as uuidv4 } from 'uuid'
import { alphabet } from '../../helpers/alphabet'
import { Link } from 'react-router-dom'
import { getBrands } from '../../helpers/getBrands'

const Brands: React.FC = () => {
    const brands = getBrands()
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
            <ul>
                {Object.entries(brands).map((brand) => {
                    if (brand[1].length !== 0) {
                        return (
                            <li key={uuidv4()}>
                                <h3>{brand[0][0]}</h3>
                                {brand[1].map((brandName) => (
                                    <p key={uuidv4()}>{brandName}</p>
                                ))}
                            </li>
                        )
                    }
                    return null
                })}
            </ul>
        </div>
    )
}
export { Brands }
