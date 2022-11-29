import {useState} from 'react';
import './Gallery.css';

function Gallery(){

const imageList=new Array();
imageList[0]="imgs/felipe-giacometti-4i5ToPi4K_c-unsplash.jpg";
imageList[1]="imgs/chandler-cruttenden-w8hWTFpGtpY-unsplash.jpg";
imageList[2]="imgs/aaron-burden-5AiWn2U10cw-unsplash.jpg";
imageList[3]="imgs/alessio-soggetti-Pao8_rE4a44-unsplash.jpg";
imageList[4]="imgs/ali-inay-yNaGxHqjOuw-unsplash.jpg";
imageList[5]="imgs/annie-nyle-HOxKiWH-2dI-unsplash.jpg";
imageList[6]="imgs/filip-bunkens-R5SrmZPoO40-unsplash.jpg";

const [count,setCount]=useState(0);
return(
<div className="gallery">
<button className="gallery-left" onClick={(e)=>count>0?setCount(count-1):setCount(count)}type="button">-</button>
<img className="gallery__picture"src={imageList[count]}/>
<button className="gallery-right" onClick={(e)=>count<=5?setCount(count+1):setCount(count)} type="button">+</button>
</div>
);
}

export default Gallery;