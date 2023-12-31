import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { BrandsbyAlphabet } from '../../helpers/brandsByAlphabet'
import { encodeURI } from '../../helpers/encodeURI'
import { BrandsContainer } from './Brands.styled'
import { ButtonStartYourSearch } from '../../components/ButtonStartYourSearch/ButtonStartYourSearch'

const handleClick = (): void => {
    window.open('/watches', '_self')
}

const Brands: React.FC = () => {
    const brandsByAlphabet = BrandsbyAlphabet()

    const alphabetAnchors = (): JSX.Element[] => {
        return Object.keys(brandsByAlphabet).map((letter) => (
            <li key={uuidv4()}>
                <a href={`#${letter}`}>{letter}</a>
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
                                <section className="mb-7">
                                    <p id={letter} className="mb-10 ml-2 bg-softYellow p-5 text-3xl">
                                        {letter}
                                    </p>

                                    <ul className="ulBrands">
                                        {brandsByAlphabet[letter].map((brand: string) => (
                                            <li key={uuidv4()}>
                                                <Link to={`/watches?brand=${encodeURI(brand)}`}>{brand}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
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
        <BrandsContainer>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl">Watch Brands A-Z</h2>
            <ul className="ulLetters">{alphabetAnchors()}</ul>
            <div className="bannerContainer center-row">
                <img src="./images/banners/rolex-banner1.webp" alt="patek banner" className="banner" />
                <img src="./images/banners/patek-banner1.webp" alt="rolex banner" className="banner" />
            </div>
            <ul className="flex flex-col">{brandsByLetter()}</ul>
            <section className="center-col gap-2 bg-softYellow p-5">
                <p className="text-center text-4xl font-semibold tracking-wider">Find Your Watch</p>
                <p className="text-center text-2xl">Over 150 watch brands&#39; new collections.</p>
                <p className="mb-3 text-center text-2xl">Audemars Piguet, Rolex, Patek Philippe and more.</p>

                <ButtonStartYourSearch
                    backgroundColor="#000000"
                    color="#ffffff"
                    width="280px"
                    handleClick={handleClick}
                />
            </section>
        </BrandsContainer>
    )
}
export { Brands }
