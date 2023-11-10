import { IconContext } from 'react-icons'
import { FaTwitter, FaLinkedinIn, FaGithub, FaMedium, FaAngellist } from 'react-icons/fa'

interface SocialMediaIconsProps {
    color: string
    size: string
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ color, size }) => {
    return (
        <>
            <li>
                <IconContext.Provider value={{ color, size, className: 'hover:scale-125 duration-300' }}>
                    <a href="https://twitter.com/marcealarconb">
                        <FaTwitter />
                    </a>
                </IconContext.Provider>
            </li>
            <li>
                <IconContext.Provider value={{ color, size, className: 'hover:scale-125 duration-300' }}>
                    <a href="https://www.linkedin.com/in/marceloalarconb/">
                        <FaLinkedinIn />
                    </a>
                </IconContext.Provider>
            </li>
            <li>
                <IconContext.Provider value={{ color, size, className: 'hover:scale-125 duration-300' }}>
                    <a href="https://chelobotix.github.io/Portafolio-Website/images/github.svg">
                        <FaGithub />
                    </a>
                </IconContext.Provider>
            </li>
            <li>
                <IconContext.Provider value={{ color, size, className: 'hover:scale-125 duration-300' }}>
                    <a href="https://medium.com/@marceloalarconbarrenechea">
                        <FaMedium />
                    </a>
                </IconContext.Provider>
            </li>
            <li>
                <IconContext.Provider value={{ color, size, className: 'hover:scale-125 duration-300' }}>
                    <a href="https://wellfound.com/u/marceloalarconb">
                        <FaAngellist />
                    </a>
                </IconContext.Provider>
            </li>
        </>
    )
}

export default SocialMediaIcons
