import React, { useState, createContext, useContext, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { Model } from "./Model.jsx";

const SceneContext = createContext();

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <ambientLight />
    </>
  );
};

const CameraController = () => {
  const cameraState = useContext(SceneContext);

  useFrame(state => {
    const vectorGo = new THREE.Vector3();
    vectorGo.set(...cameraState.position);
    const vector = new THREE.Vector3();
    const vector2 = new THREE.Vector3();
    vector.set(...cameraState.target);
    vector2.set(...cameraState.target);

    state.camera.lookAt(vector2.lerp(vector, 0.01));
    state.camera.position.lerp(vectorGo, 0.01);
    state.camera.updateProjectionMatrix();
  });

  return null;
};

const App = () => {
  const [cameraState, setCameraState] = useState({
    target: [0.164041, 1.70203,  -2.63033],
    position: [-0.164041,1.2,-0.2]
  });

  const moveTo = (target, position) => {
    setCameraState({
      target: target,
      position: position
    });
  };

  return (
    <SceneContext.Provider value={cameraState}>
      <Canvas shadows gl={{ physicallyCorrectLights: true, toneMappingExposure: .1 }}>
        <CameraController />
        <Scene />
      </Canvas>
      <div style={{
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    fontSize: 20
}}>
    <div className='btn' style={{ fontWeight: 'bold', color: 'white', cursor: 'pointer', margin: '10px' }} onClick={() => { moveTo([-0.1,1.2,-0.2], [0.6187, 1.5865, 2.1897]) }}>Projects</div>
    <div className='btn' style={{ fontWeight: 'bold', color: 'white', cursor: 'pointer', margin: '10px' }} onClick={() =>{ moveTo([-0.1,1.2,-0.2], [-1.0104, 1.4929, 1.3655]) }}>Contact Me</div>
</div>
    </SceneContext.Provider>
  );
};

export default App;

