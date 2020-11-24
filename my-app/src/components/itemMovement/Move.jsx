import React from 'react';

function Move(props) {
    const pic1 = {src:'https://i2.kknews.cc/SIG=399a0pv/ctp-vzntr/162p908291344o40n54o9s62114s9111.jpg' , left : 0},
          pic2 = {src:'https://i1.kknews.cc/SIG=kchjev/ctp-vzntr/nn95038pp8nr45q088390oqn5no6os58.jpg' , left : 400},
          pic3 = {src:'https://i2.kknews.cc/SIG=3c2erdb/ctp-vzntr/9364685843214on2n9n75698165054np.jpg' , left : 800},
          pic4 = {src:'https://i1.kknews.cc/SIG=e1rrr9/ctp-vzntr/8804s03p7o9644159s690qq94691o0oq.jpg' , left : 1200}
        console.log(props)

    return (
        <div>
            <img src={pic1.src} style={{width:'300px',height:'300px',position:'fixed',left:'0px',opacity:'50%'}}  />
            <img src={pic2.src} style={{width:'300px',height:'300px',position:'fixed',left:'400px',opacity:'100%'}} />
            <img src={pic3.src} style={{width:'300px',height:'300px',position:'fixed',left:'800px',opacity:'0.5'}} />
            <img src={pic4.src} style={{width:'300px',height:'300px',position:'fixed',left:'1200px',opacity:'0.5'}} />
        </div>
    );
}

export default Move;