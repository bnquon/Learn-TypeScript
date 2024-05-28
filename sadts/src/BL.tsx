import { FC } from "react";
import sfuLogo from '/logo.png'
import gameThumb from '/teamThumbnail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BL: FC = () => {
    return (
        <div id="bl">
            <div id="bLeft">
                <img id='logo' src={sfuLogo} alt="" />
            </div>
            <div className="clickable">
                <div id="events">
                    <span>EVENTS<FontAwesomeIcon id='arrow1' icon={faArrowRight} color="white"/></span>
                </div>
                <div id="compteam">
                    <img src={gameThumb} alt="" />
                    <span>COMPETITIVE TEAMS<FontAwesomeIcon id='arrow2' icon={faArrowRight} color="white"/></span>
                </div>
            </div>
        </div>
    )
}

export default BL