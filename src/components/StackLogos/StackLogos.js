import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./StackLogos.scss";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MeshStandardMaterial } from "three";
function StackLogos(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x += 0.01));
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
}

export default StackLogos;
