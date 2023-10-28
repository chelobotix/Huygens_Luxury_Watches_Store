import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { BrandsbyAlphabet } from '../../helpers/brandsByAlphabet'
import { encodeURI } from '../../helpers/encodeURI'
import { BrandsContainer } from './Brands.styled'
import { Button } from '@mui/material'

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
                                <section className="my-20">
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">Watch Brands A-Z</h2>
            <ul className="ulLetters">{alphabetAnchors()}</ul>
            <div className="bannerContainer center-row">
                <img src="./images/banners/rolex-banner1.webp" alt="patek banner" className="banner" />
                <img src="./images/banners/patek-banner1.webp" alt="rolex banner" className="banner" />
            </div>
            <ul className="flex flex-col">{brandsByLetter()}</ul>
            <section className="center-col gap-2 bg-softYellow p-5">
                <p className="text-4xl font-semibold tracking-wider">Find Your Watch</p>
                <p className="text-2xl">Over 150 watch brands&#39; new collections.</p>
                <p className="text-2xl">Audemars Piguet, Rolex, Patek Philippe and more.</p>
                <Button>Start your search</Button>
            </section>
        </BrandsContainer>
    )
}
export { Brands }
