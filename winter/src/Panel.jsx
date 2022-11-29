import './Panel.css';
import { useState } from 'react';

function Panel(){
const [name, setOpen] = useState(true);
const [name2, setOpen2] = useState(true);
const [name3, setOpen3] = useState(true);
return(
       <div className="panel">
       <h2>See more about our activities!</h2>
           <ul className="accordian">
             <li className={name?"accordian__item":"accordian__item--open"}>
                <button className="accordian__title" onClick= {() => setOpen(!name)}>What is winter </button>
                <div className="accordian__content">Winter, the coldest season of the year, comes between autumn and spring. It is associated with plunging temperatures and icy weather, but its impact and timing change according to location. The farther an area lies from the equator, the colder temperatures it experiences. Temperatures in equatorial regions stay relatively constant despite the shifting seasons. </div>
             </li>
             <li className={name2?"accordian__item":"accordian__item--open"}>
                <button className="accordian__title" onClick= {() => setOpen2(!name2)}>Let's ski </button>
                <div className="accordian__content">one of a pair of narrow strips of wood, metal, or plastic curving upward in front that are used especially for gliding over snow. </div>
             </li>
             <li className={name3?"accordian__item":"accordian__item--open"}>
                <button className="accordian__title" onClick= {() => setOpen3(!name3)}>Find Reindeers together </button>
                <div className="accordian__content">Reindeers that live above the Arctic circle live in total darkness for weeks at a time. According to the Meteorological Office of the UK, reindeer have adapted to this in a unique way. </div>
             </li>
           </ul>
       </div>
);

}

export default Panel;