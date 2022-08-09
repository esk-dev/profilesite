import React from 'react';
import './Roadmap.scss';
function Roadmap() {
  return (
    <div className="Roadmap">
      <svg
        className="recatngels"
        xmlns="http://www.w3.org/2000/svg"
        id="rect1"
        viewbox="0 0 15 15"
      >
        <rect x="10" y="2.5" rx="20" ry="20" width="90%" height="90%" />
      </svg>
      <svg
        className="arrows"
        id="arrow"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 64 64"
      >
        <path
          fill="#2e58a6"
          d="M58.9,44.09c-4-2.53-7.51-5.59-11.47-8.12-2.37-1.52-4.41,1-2,2.55s4.46,3.11,6.64,4.73a1.64,1.64,0,0,0-.43,0c-15.2.75-16.91-13.07-23.41-23A25.08,25.08,0,0,0,5.08,9.08c-2.51.2-.14,4,1.81,3.86,6.54-.51,13.14,1.7,17.24,7,3.35,4.28,4.86,9.68,7.45,14.38C35.72,41.78,42.46,46.59,50.9,47l-7.13,4.36c-2,1.22,1.25,4.45,3,3.37l12.63-7.73C60.58,46.34,59.77,44.65,58.9,44.09Z"
        />
      </svg>
      <svg className="recatngels" id="rect2" xmlns="http://www.w3.org/2000/svg">
        <use href="#rect1" />
      </svg>
      <svg
        className="arrows"
        id="arrow2"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 64 64"
      >
        <path
          fill="#2e58a6"
          d="M57.22,11.88c-6.11-.64-12-2.22-18.16-2.86-2.86-.3-.86,3.54,1.23,3.76,3.67.38,7.27,1.11,10.89,1.76-20.7,4.51-39.12,17.73-47.1,37-.64,1.55,2.4,4.88,3.3,2.7,7.32-17.69,24.13-30.11,42.89-35a93.39,93.39,0,0,0-6.61,8c-1.26,1.79,2.52,4.55,3.76,2.78,3.71-5.27,8.58-9.68,12.29-15C60.78,13.64,58.61,12,57.22,11.88Z"
        />
      </svg>
      <svg className="recatngels" id="rect3" xmlns="http://www.w3.org/2000/svg">
        <use href="#rect1" />
      </svg>
      <svg
        className="arrows"
        id="arrow3"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 64 64"
      >
        <path
          fill="#2e58a6"
          d="M58.38,44.66C54.16,43,50.28,40.8,46.06,39.1c-2.74-1.1-3.22,1.69-.93,2.61s4.56,2,6.79,3.08a37.89,37.89,0,0,1-16.79-.33C31.47,43.53,27.58,42,25,39.65a9.11,9.11,0,0,1-2.47-4.55c3.22.63,6.73.64,9.23-.84,3.44-2,2.26-5.64-1-7.37a8.94,8.94,0,0,0-11.1,2.5,6.87,6.87,0,0,0-.84,1.67,17.26,17.26,0,0,1-5.59-3.42C8.41,23.24,7.54,17,7.92,11.4,8,9.85,4.21,7.84,4.07,9.84c-.63,9.22,2.66,19.22,13.54,23.8l.85.33a11.5,11.5,0,0,0,3.69,6.9c6.69,6.4,17.88,8.7,28,7.68L44.71,52c-1.87,1.19,1.41,3.78,3,2.76l11.7-7.42C60.74,46.52,59.53,45.12,58.38,44.66ZM25.57,29.85q2.06-1.5,2.38,1.88l-1.87.38A14.67,14.67,0,0,1,22.66,32,3.69,3.69,0,0,1,25.57,29.85Z"
        />
      </svg>
      <svg
        className="rhombus"
        xmlns="http://www.w3.org/2000/svg"
        id="rhombus"
        viewbox="0 0 180 180"
      >
        <rect x="0.5" y="0.5" width="95%" height="95%" />
      </svg>
    </div>
  );
}

export default Roadmap;