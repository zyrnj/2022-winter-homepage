import Panel from './Panel';
import Card from './Card';
import Register from './Register';
import Gallery from './Gallery';
import {useState} from 'react';
import './Main.css';
import GlobalNav from './GlobalNav';
import About from './About';

function Main() {
const [page, setPage] = useState('Card');

 return (
 <main id="main">
 <GlobalNav setPage={setPage}/>
 { (page === 'Panel') && <Panel/> }
 { (page === 'Card') && <Card/> }
 { (page === 'Register') && <Register/> }
 { (page === 'Gallery') && <Gallery/> }
 { (page === 'About') && <About/> }
 </main>
 );
}

export default Main;