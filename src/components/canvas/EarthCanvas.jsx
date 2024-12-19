import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile, isTablet }) => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive 
    object={earth.scene} 
    scale={isMobile ? 2.5 : (isTablet ? 2.5: 2)} 
    position-y={0} 
    rotation-y={0} />
  );
};

const EarthCanvas = () => {
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
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} isTablet={isTablet} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
