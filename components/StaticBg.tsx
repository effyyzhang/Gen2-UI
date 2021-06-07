import { Box } from "@chakra-ui/layout";
import { PoemData } from "../lib/types";
import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const DemoBox = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1,
    -1, 1, 1,
  ];
  const indicesOfFaces = [
    2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2,
    3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4,
  ];

  useFrame(
    (state, setActive) => (
      (mesh.current.rotation.y += 0.01), (mesh.current.rotation.z += 0.01)
    )
  );
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 0.7 : 0.5}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <polyhedronGeometry args={[verticesOfCube, indicesOfFaces, 1.2]} />
      <meshPhongMaterial
        attach="material"
        color={hovered ? "hotpink" : "white"}
        wireframe
      />
    </mesh>
  );
};

const StaticBg = ({ data }: { data: PoemData["address"] }) => {
  const address = data;
  const color1: string = "#".concat(address.slice(2, 8));
  const color2: string = "#".concat(address.slice(-6));
  return (
    <Box
      id="card-bg"
      bg="transparent"
      position="absolute"
      x="0"
      y="0"
      boxSize="360px"
      borderRadius="xl"
      overflow="hidden"
      bgGradient={`linear(to-tr, ${color1}, ${color2})`}
      zIndex="-10"
    >
      <Canvas>
        <ambientLight />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <DemoBox position={[2.5, -2.5, 0]} />
      </Canvas>
    </Box>
  );
};

export default StaticBg;
