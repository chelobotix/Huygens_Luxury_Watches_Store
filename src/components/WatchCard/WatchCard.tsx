/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'
import { numberWithCommas } from '../../helpers/numberWithComma'
import { imgPath } from '../../helpers/imgPath'
import { type IWatch } from '../../types/WatchInterface'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import style from './WatchCard.module.css'
import { useState } from 'react'

const WatchCard: React.FC<{ watch: IWatch }> = ({ watch }) => {
    const [favorite, setFavorite] = useState(false)
    const handleFavorite = (): void => {
        setFavorite(!favorite)
    }

    return (
        <li key={uuidv4()} className="center-col m-2 w-[310px] border-[1px] border-softGray px-2 py-4">
            <div className="self-end rounded-sm border-[1px] border-black ">
                <button onClick={handleFavorite} className={`p-2 ${favorite && 'bg-red-100'}`}>
                    <FavoriteBorderIcon />
                </button>
            </div>
            <div
                className={`${style.blurImage}`}
                style={{
                    backgroundImage: `url(${imgPath(watch.brand, watch.name, watch.images[0])})`,
                }}
            ></div>
            <div className="center-col mt-4">
                <p className="text-lg font-semibold">{watch.brand}</p>
                <p className="text-center">{watch.name}</p>
                <p className="text-md text-slate-700">
                    {watch.price !== 0 ? `${numberWithCommas(watch.price)} USD` : 'Price upon request'}
                </p>
            </div>
        </li>
    )
}
export { WatchCard }
