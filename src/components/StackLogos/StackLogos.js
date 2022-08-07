import React from 'react'
import './StackLogos.scss'
import { LogoA } from '../../assets/angular.svg';
function StackLogos() {
  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoA}
        alt="JavaScript,  Developer"
      />
    </div>
  );
}

export default StackLogos;