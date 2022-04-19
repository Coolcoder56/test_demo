import React from 'react';
import '../App.css';

import ecomv from 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/video/ecomv.mp4';
import btn2 from 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/Components/btn2.js'
import 'C:/Users/gupta/3D Objects/College 8th sem project/efire/src/stylesheets/HeroSection.css';

// class video extends React.Component {
//   render() {
//     return (
//       <div className="video">
//         <video autoPlay loop muted>
//           <source src="C:/Users/gupta/3D Objects/College 8th sem project/efire/src/images/video.mp4" type="video/mp4" />
//         </video>
//       </div>
//     );
//   }
// }
    
function HeroSection() {
  return (
    <div className='hero-container'>
        
     <video src = {ecomv} alt='this is a video' autoPlay loop muted></video>
      <h1 ><i>Want to know more ...</i></h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <btn2
          className='btn--outline'
          
          
          onClick={() => {
            window.location.href = '/';
          }}
      >
          GET STARTED
        </btn2>
        <div style ={{padding :'1em'}}></div>
        <btn2
          className='btn--outline'
         
         
          onClick={() => {window.location = 'https://www.youtube.com/watch?v=OzBYuurGv_c'}}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </btn2>
      </div>
    </div>
  );
}

export default HeroSection;
