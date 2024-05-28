import { FC } from "react";
import racc from '/raccon_hi.png'
import './Raccoon.css'

const Raccoon: FC<{}> = () => {
    return (
        <div id="raccoon">
            <img src={racc} alt="" />
        </div>
    )
}

export default Raccoon