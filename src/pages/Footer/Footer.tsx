import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons'

const Footer: React.FC = () => {
    return (
        <div className="m-4">
            <Divider>
                <Link to="/home">
                    <p>HUYGUENS</p>
                </Link>
            </Divider>
            <div className="center-col gap-3 text-darkBlue">
                <p>© 2023 Barrenechea</p>
                <ul className="center-row list-none gap-3">
                    <SocialMediaIcons color="#153452" size="1.3rem" />
                </ul>
            </div>
        </div>
    )
}
export { Footer }
