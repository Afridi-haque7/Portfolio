import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF(
    "https://portfolio-assets-storage.s3.ap-south-1.amazonaws.com/public/desktop_pc/scene.gltf"
  );
  let scale = 0.75,
    position = [0, -3.5, -1.5];

  if (isMobile) {
    scale = 0.4;
    position = [0, -1, -0.65];
  } else if (isTablet) {
    scale = 0.65;
    position = [0, -3.75, -1];
  }
  return (
    <mesh className="border">
      <hemisphereLight intensity={2.8} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow={true}
        shadow-mapSize={1024}
      />
      <pointLight
        intensity={3}
        position={
          isMobile ? [0, 0.55, 0.5] : isTablet ? [0, -0.5, 0.5] : [0, -0.5, 0.5]
        }
      />
      <primitive
        autoRotate={true}
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mobileQuery = window.matchMedia("(max-width: 465px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 465px) and (max-width: 768px)"
    );

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Define callback functions to handle changes to the media queries
    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleTabletQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mobileQuery.addEventListener("change", handleMobileQueryChange);
    tabletQuery.addEventListener("change", handleTabletQueryChange);

    // Remove the listeners when the component is unmounted
    return () => {
      mobileQuery.removeEventListener("change", handleMobileQueryChange);
      tabletQuery.removeEventListener("change", handleTabletQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
