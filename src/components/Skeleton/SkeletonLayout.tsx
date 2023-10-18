import Skeleton from '@mui/material/Skeleton'
import { v4 as uuidv4 } from 'uuid'

const SkeletonLayout: React.FC = () => {
    const skeletonArray = []
    for (let i = 0; i < 11; i++) {
        skeletonArray.push(
            <li key={uuidv4()}>
                <Skeleton variant="text" width="20%" />
                <Skeleton variant="text" width="10%" />
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="text" width="10%" />
                <Skeleton variant="rectangular" width={210} height={50} />
            </li>
        )
    }
    return (
        <div>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <ul>{skeletonArray}</ul>
            <Skeleton variant="rectangular" width={210} height={118} />
        </div>
    )
}
export { SkeletonLayout }
