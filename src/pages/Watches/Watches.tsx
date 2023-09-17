import { useLocation } from 'react-router-dom'

const Watches: React.FC = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const params = []
    for (const [key, value] of searchParams.entries()) {
        params.push({ key, value })
    }
    console.log(params)

    return <div>watches</div>
}
export { Watches }
