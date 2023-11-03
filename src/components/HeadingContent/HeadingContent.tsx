import { ButtonStartYourSearch } from '../ButtonStartYourSearch/ButtonStartYourSearch'
import { HeadingContentS } from './HeadingContent.styled'

interface HeadingContentProps {
    width: string
    backgroundColor: string
    color: string
}

const HeadingContent: React.FC<HeadingContentProps> = ({ backgroundColor, width, color }) => {
    const handleClick = (): void => {
        window.open('/watches', '_self')
    }
    return (
        <HeadingContentS>
            <h1 className="text-2xl text-black  shadow-cyan-400 drop-shadow-2xl sm:text-white">
                Explore over 150 watch brands&apos; new collections.
            </h1>
            <ButtonStartYourSearch
                backgroundColor={backgroundColor}
                color={color}
                width={width}
                handleClick={handleClick}
            />
        </HeadingContentS>
    )
}
export { HeadingContent }
