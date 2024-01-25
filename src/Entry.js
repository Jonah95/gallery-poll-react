// import React from 'react';
// import './Entry.css'; // Import your CSS file
// import logo from './img/triranga-competition-logo.png';
// import img1 from './img/crp-img/dance-crp.png';
// import img2 from './img/crp-img/flower-crp.png';
// import img3 from './img/crp-img/flowers-crp.png';
// import img4 from './img/crp-img/girl-crp.png';



// const Entry = () => {
//   return (
//     <div className="entry-container">
//       {/* Section 1: Subheading, Para, Square Image */}
//       <section className="intro-section">
//         <div className="text-container">
//           <h1>Hello, Annalectuals🤘</h1>
//           <h2>Welcome to Tiranga</h2>
//           <p>
//             Welcome to our gallery! Enter your name, explore with "Next," and
//             rate images by clicking. Share your thoughts! Use "Next" to navigate
//             and hit "Home" to return. Enjoy the visual journey, and thanks for
//             being part of our community!
//           </p>
//           <button className="enter-gallery-button">Enter Gallery</button>
//         </div>
//         <div className="image-container">
//           <img src={logo} alt="Square Image" className="square-image" />

//         </div>
//       </section>
    
//       {/* Section 2: Four Images in Four Columns */}
//       <section className="image-grid">
//         <div className="grid-item">
//           <img src={img1} alt="Image 1" />
//         </div>
//         <div className="grid-item">
//           <img src={img2} alt="Image 2" />
//         </div>
//         <div className="grid-item">
//           <img src={img3} alt="Image 3" />
//         </div>
//         <div className="grid-item">
//           <img src={img4} alt="Image 4" />
//         </div>
//       </section>
//       {/* End of Section 2 */}
//     </div>
//   );
// };

// export default Entry;


import React from 'react';
import { Link } from 'react-router-dom';
import './Entry.css'; // Import your CSS file
import logo from './img/triranga-competition-logo.png';
import img1 from './img/crp-img/dance-crp.png';
import img2 from './img/crp-img/flower-crp.png';
import img3 from './img/crp-img/flowers-crp.png';
import img4 from './img/crp-img/girl-crp.png';

const Entry = () => {
  

  return (
    <div className="entry-container">
      {/* Section 1: Subheading, Para, Square Image */}
      <section className="intro-section">
        <div className="text-container">
          <h1>Hello, Annalectuals🤘</h1>
          <h2>Welcome to Tiranga</h2>
          <p>
            Welcome to our gallery! Enter your name, explore with "Next," and
            rate images by clicking. Share your thoughts! Use "Next" to navigate
            and hit "Home" to return. Enjoy the visual journey, and thanks for
            being part of our community!
          </p>
          <Link to="/"><button className="enter-gallery-button">
            Enter Gallery
          </button></Link>
        </div>
        <div className="image-container">
          <img src={logo} alt="Square Image" className="square-image" />
        </div>
      </section>

      {/* Section 2: Four Images in Four Columns */}
      <section className="image-grid">
        <div className="grid-item">
          <img src={img1} alt="Image 1" />
        </div>
        <div className="grid-item">
          <img src={img2} alt="Image 2" />
        </div>
        <div className="grid-item">
          <img src={img3} alt="Image 3" />
        </div>
        <div className="grid-item">
          <img src={img4} alt="Image 4" />
        </div>
      </section>
      {/* End of Section 2 */}
    </div>
  );
};

export default Entry;
