import { FC } from "react";
import './MainGrid.css'
import TL from "./TL";
import BL from "./BL";
import Right from "./Right";

const MainGrid: FC<{}> = () => {
    return (
        <div id="homeCon">
            <TL/>
            <Right/>
            <BL/>
        </div>
    )
}

export default MainGrid