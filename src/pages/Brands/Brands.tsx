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
                                    <Link key={uuidv4()} to={`/brands/${brandName}`}>
                                        <img
                                            src={`${window.location.origin}/images/${brandName.replace(
                                                /\s/g,
                                                ''
                                            )}/logo.svg`}
                                            alt=""
                                            width="100px"
                                        />
                                        <p>{brandName}</p>
                                    </Link>
                                ))}
                            </li>
                        )
                    }
                    return null
                })}
            </ul>
            <Link to={`/brands/dsdasdasda`}>cualquier verga</Link>
        </div>
    )
}
export { Brands }
