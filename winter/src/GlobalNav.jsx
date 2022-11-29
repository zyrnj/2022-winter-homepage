import './GlobalNav.css';
import {useState} from 'react';

function GlobalNav({setPage}) {

function go(event, page) {
event.preventDefault();
setPage(page);
}


return (
<nav>
 <ul className="global-nav__list">
  <li className="global-nav__item">
   <a className="global-nav__link" href="/" onClick={ (e) => go(e, "Register") }> Register </a>
  </li>
  <li className="global-nav__item">
   <a className="global-nav__link" href="/card" onClick={ (e) => go(e, "Card") }> Card </a>
  </li>
  <li className="global-nav__item">
   <a className="global-nav__link" href="/panel" onClick={ (e) => go(e, "Panel") }> Panel </a>
  </li>
  <li className="global-nav__item">
     <a className="global-nav__link" href="/" onClick={ (e) => go(e, "Gallery") }> Gallery </a>
    </li>
  <li className="global-nav__item">
       <nav className="dropdown">
       <li><button className="dropdown-button" type="button">More</button>
            <ul>
                 <li className="dropdown__item"><a href="#"onClick={ (e) => go(e, "Card") }>Homepage</a></li>
                 <li className="dropdown__item"><a href="#"onClick={ (e) => go(e, "About") }>About Us</a></li>
                 <li className="dropdown__item"><a href="#"onClick={ (e) => go(e, "Register")}>Donate!</a></li>
            </ul>
       </li>
       </nav>
  </li>
 </ul>
</nav>
); }

export default GlobalNav;