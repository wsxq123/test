import React , {useState} from 'react';
import Move from '../itemMovement/Move';

function ScrollListener(props) {

    const listen1 = window.addEventListener('scroll', ()=>{ console.log(window.screenY)} )
    
    const [scrollValue,setScroll]=useState(0)    

    return (
        <>
            <div style={{border:'3px solid tomato',widows:'100%',height:'2000px'}}>
                <Move/>
            </div>
            
        </>
    );
}

export default ScrollListener;
