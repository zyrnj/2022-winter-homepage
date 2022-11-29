import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import Gallery from './Gallery';
import {useState} from 'react';

function App() {
function setMode(){
sMode(!mode);
}
const[mode,sMode]=useState(true);

  return (
    <div className={mode?"app":"app-dark"}>

       <Header setMode={setMode} />
       <Main/>
       <Footer/>
    </div>
  );
}

export default App;
