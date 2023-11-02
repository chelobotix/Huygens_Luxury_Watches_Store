import { ButtonStartYourSearch } from '../ButtonStartYourSearch/ButtonStartYourSearch'

const HeadingContent: React.FC = () => {
    const handleClick = (): void => {
        window.open('/watches', '_self')
    }
    return (
        <div>
            <h1>Explore over 150 watch brands&apos; new collections.</h1>
            <ButtonStartYourSearch backgroundColor="#ffffff" color="#000000" handleClick={handleClick} />
        </div>
    )
}
export { HeadingContent }
