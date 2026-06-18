import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '@whatisjery/react-fluid-distortion';
import { div } from 'framer-motion/client';

export default function FluidBackground() {
  return (
    <div className='fluid-background'>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' , zIndex: -1, pointerEvents: "none"}}>
        <EffectComposer>
          <Fluid 
            distortion={0.5} 
            rainbow={true} 
            fluidRadius={0.05}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
