import { Link } from 'react-router-dom'
import { BrandsbyAlphabet } from '../../helpers/brandsByAlphabet'
import { v4 as uuidv4 } from 'uuid'
import { removeWhiteSpace } from '../../helpers/removeWhiteSpace'
import { encodeURI } from '../../helpers/encodeURI'

const Brands: React.FC = () => {
    const brandsByAlphabet = BrandsbyAlphabet()

    const alphabetAnchors = (): JSX.Element[] => {
        return Object.keys(brandsByAlphabet).map((letter) => (
            <li key={uuidv4()}>
                <Link to={`#${letter}`}>{letter}</Link>
            </li>
        ))
    }

    const brandsByLetter = (): JSX.Element | null => {
        return (
            <>
                {Object.keys(brandsByAlphabet).map((letter) => {
                    if (brandsByAlphabet[letter].length > 0) {
                        return (
                            <li key={uuidv4()}>
                                <h2>{letter}</h2>
                                <ul>
                                    {brandsByAlphabet[letter].map((brand: string) => (
                                        <li key={uuidv4()}>
                                            <Link to={`/watches?brand=${encodeURI(brand)}`}>
                                                {brand}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    } else {
                        return null
                    }
                })}
            </>
        )
    }

    return (
        <div>
            <ul>{alphabetAnchors()}</ul>
            <ul>{brandsByLetter()}</ul>
        </div>
    )
}
export { Brands }
