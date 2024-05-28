import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTwitch, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Socials.css'

const Socials: FC<{}> = () => {
    return (
        <div className="socialsCon">
            <FontAwesomeIcon className='sm' icon={faDiscord} />
            <FontAwesomeIcon className='sm' icon={faInstagram} />
            <FontAwesomeIcon className='sm' icon={faTwitch} />
            <FontAwesomeIcon className='sm' icon={faTwitter} />
            <FontAwesomeIcon className='sm' icon={faFacebook} />
        </div>
    )   
}

export default Socials