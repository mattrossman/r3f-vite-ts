import { useRef } from "react"
import { OrbitControls, TorusKnot } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export default function App() {
  return (
    <Canvas style={{ position: "fixed", inset: 0 }}>
      <color attach="background" args={["black"]} />
      <OrbitControls />
      <Thing />
    </Canvas>
  )
}

function Thing() {
  const ref = useRef<Mesh>(null!)
  useFrame(() => (ref.current.rotation.y += 0.01))
  return (
    <TorusKnot ref={ref} args={[1, 0.3, 128, 16]}>
      <meshNormalMaterial />
    </TorusKnot>
  )
}
