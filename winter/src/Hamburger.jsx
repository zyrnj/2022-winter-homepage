import './Hamburger.css';
import {useState} from 'react';


function Hamburger({setMode}){
function changeShowHamburger(){
setShowHamburger(!showHamburger);
}
const [showHamburger,setShowHamburger]=useState(false);

return(
    <nav className="hamburger">
            <button className="hamburger__button" onClick={(e)=>{changeShowHamburger()}}  type="button">☰</button>
                <ul className={showHamburger?"hamburger__link-active":"hamburger__link"}>
                    <li><a href="https://en.wikipedia.org/wiki/Winter">Understand</a></li>
                    <li><a href="https://www.britannica.com/science/winter">Find more</a></li>
                    <li><button className="switch-mode" onClick={(e)=>{setMode()}} type="button">Switch Mode</button></li>
                </ul>
        </nav>
);}

export default Hamburger;
