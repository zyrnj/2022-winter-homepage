import './Header.css';
import Hamburger from './Hamburger';


function Header({setMode}) {

return (
<header className="header">

 <img src="imgs/logo.jpg" className="header__logo" alt="Feline Overlords Logo" />
<a href="#main" className="skip">Skip to content</a>
 <h1 className="header__title"> Welcome to Winter Club</h1>
 <Hamburger setMode={setMode}/>
</header>
); }

export default Header;