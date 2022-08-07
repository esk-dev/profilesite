import React from 'react'
import { useEffect, useRef } from 'react'
import './StackLogos.scss'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import { LogoA } from '../../assets/angular.svg';
function StackLogos() {
  const ngRef = useRef()
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap.fromTo(
      "path",
      {
        fill: "none"
      },
      {
        delay: 2,
        fill: ''
      }
    )
    gsap.fromTo(
      "path",
      { 
        drawSVG: "0%"
      },
      {
        drawSVG: "100%",
        duration: 2,
      }
    )
  }, [])

  return (
    <div className="logo-container" >
      <svg
      className="svg-container"  
      xmlns="http://www.w3.org/2000/svg"  
      preserveAspectRatio="xMidYMid" 
      viewBox="0 0 256 272">
        <path 
        fill="#E23237"
        d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"
        />
        <path 
        fill="#B52E31" 
        d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z"
        />
        <path 
        fill="#FFF" 
        d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"
        />
      </svg>
      <svg
      className="svg-container" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 124 141.53199999999998">
        <path 
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" 
        fill="#e34f26"
        />
        <path 
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" 
        fill="#ef652a"
        />
        <path 
        d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" 
        fill="#fff"/>
      </svg>
      <svg 
        className="svg-container" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
        <path 
        d="M21.316 18.755 23 3.986 12 0 1 3.986l1.684 14.769L12 24l9.316-5.245zm-13.624-.444H5.114L12 2.651l6.892 15.659h-2.573l-1.387-3.504H9.079l-1.387 3.505z"
        />
        <path 
        d="M9.983 12.648h4.034L12 7.741z"
        />
      </svg>
      <svg 
        className="svg-container" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
        <path 
        d="M21.316 18.755 23 3.986 12 0 1 3.986l1.684 14.769L12 24l9.316-5.245zm-13.624-.444H5.114L12 2.651l6.892 15.659h-2.573l-1.387-3.504H9.079l-1.387 3.505z"
        />
        <path 
        d="M9.983 12.648h4.034L12 7.741z"
        />
      </svg>
    </div>
  );
}

export default StackLogos;