import { Link } from 'react-router-dom'
import { BrandsbyAlphabet } from '../../helpers/brandsByAlphabet'
import { v4 as uuidv4 } from 'uuid'

const Brands: React.FC = () => {
    const brandsByAlphabet = BrandsbyAlphabet()
    console.log(brandsByAlphabet)

    return (
        <div>
            <ul>
                {Object.keys(brandsByAlphabet).map((letter) => (
                    <li key={uuidv4()}>
                        <Link to={`#${letter}`}>{letter}</Link>
                    </li>
                ))}
            </ul>
            <ul>
                {Object.keys(brandsByAlphabet).map((letter) => {
                    if (brandsByAlphabet[letter].length > 0) {
                        return (
                            <li key={uuidv4()}>
                                <h2>{letter}</h2>
                                <ul>
                                    {brandsByAlphabet[letter].map((brand) => (
                                        <li key={uuidv4()}>
                                            <Link to={`/watches/${brand}`}>{brand}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    }
                    ;<li key={uuidv4()}>
                        <Link to={`#${letter}`}>{letter}</Link>
                    </li>
                    return []
                })}
            </ul>
        </div>
    )
}
export { Brands }
