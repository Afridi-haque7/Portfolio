// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export function Balls(props) {
//   const { nodes, materials } = useGLTF("/models/pool_ball.glb");
//   return (
//     <group {...props} dispose={null}>
//      <ambientLight intensity={0.5} />
//      <directionalLight position={[0, 0, 0.5]} />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_2.geometry}
//         material={materials.None}
//         rotation={[-Math.PI / 2, 0, 0]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/models/pool_ball.glb");
