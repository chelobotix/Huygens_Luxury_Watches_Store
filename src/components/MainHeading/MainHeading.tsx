import { MainHeadingStyled } from './MainHeading.styled'

interface MainHeadingProps {
    children?: JSX.Element[] | JSX.Element
}
const MainHeading: React.FC<MainHeadingProps> = ({ children }) => {
    return <MainHeadingStyled>{children}</MainHeadingStyled>
}
export { MainHeading }
