/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'
import { numberWithCommas } from '../../helpers/numberWithComma'
import { imgPath } from '../../helpers/imgPath'
import { type IWatch } from '../../types/WatchInterface'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useState } from 'react'
import { WatchCardElement } from './WatchCard.styled'

const WatchCard: React.FC<{ watch: IWatch }> = ({ watch }) => {
    const [favorite, setFavorite] = useState(false)
    const handleFavorite = (): void => {
        setFavorite(!favorite)
    }

    return (
        <WatchCardElement key={uuidv4()} className="center-col">
            <div className="favorite">
                <button onClick={handleFavorite} className={`p-2 ${favorite && 'bg-red-100'}`}>
                    <FavoriteBorderIcon />
                </button>
            </div>
            <div
                className="blurImage"
                style={{
                    backgroundImage: `url(${imgPath(watch.brand, watch.name, watch.images[0])})`,
                }}
            ></div>
            <div className="center-col mt-4">
                <p className="text-lg font-semibold">{watch.brand}</p>
                <p className="w-[290px] truncate">{watch.name}</p>
                <p className="text-md text-slate-700">
                    {watch.price !== 0 ? `${numberWithCommas(watch.price)} USD` : 'Price upon request'}
                </p>
            </div>
        </WatchCardElement>
    )
}
export { WatchCard }
