import { FC } from "react";
import './NavBar.css'
const Navbar: FC<{}> = () => {

    return (
        <div className="navCon">
            <div id="nav">
                <h5>About </h5>
                <h5>Schedule</h5>
                <h5>Teams</h5>
                <h5>Contact</h5>
            </div>
        </div>
    )

}

export default Navbar