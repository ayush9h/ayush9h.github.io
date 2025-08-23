"use client"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"

const Spheres = ({ className = "", containerRef }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 200)
    camera.position.z = 60

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.outputColorSpace = THREE.SRGBColorSpace

    scene.add(new THREE.AmbientLight(0xffffff, 0.35))
    const pointLight = new THREE.PointLight(0xffffff, 1.4)
    pointLight.position.set(15, 15, 15)
    scene.add(pointLight)

    new RGBELoader().load("/studio_small_09_4k.hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping
      scene.environment = texture
    })

    const spheres = []
    const radius = 8
    const geometry = new THREE.SphereGeometry(radius, 64, 64)
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.25, metalness: 0.1, envMapIntensity: 1.0 }),
      new THREE.MeshStandardMaterial({ color: 0x2266cc, roughness: 0.35, metalness: 0.3, envMapIntensity: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.15, envMapIntensity: 1.2 }),
    ]

    const areaSize = 40
    for (let i = 0; i < 25; i++) {
      const sphere = new THREE.Mesh(geometry, materials[i % 3])
      sphere.position.set(
        (Math.random() - 0.5) * areaSize,
        (Math.random() - 0.5) * areaSize,
        (Math.random() - 0.5) * areaSize * 0.5
      )
      sphere.userData.target = sphere.position.clone()
      spheres.push(sphere)
      scene.add(sphere)
    }

    const clock = new THREE.Clock()
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const forceSphere = new THREE.Vector3(0, 0, 0)
    const forceRadius = radius * 2.2
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const intersection = new THREE.Vector3()

    function onMouseMove(event) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      if (raycaster.ray.intersectPlane(plane, intersection)) {
        forceSphere.copy(intersection)
      }
    }
    window.addEventListener("mousemove", onMouseMove)

    const colors = [0xffff00, 0xff0000, 0x00ff00]
    let colorIndex = 0
    function onClick() {
      colorIndex = (colorIndex + 1) % colors.length
      materials[1].color.setHex(colors[colorIndex])
    }
    containerRef?.current?.addEventListener("click", onClick)

    function animate() {
      requestAnimationFrame(animate)
      const delta = clock.getDelta()

      for (let i = 0; i < spheres.length; i++) {
        const a = spheres[i]
        const distToForce = a.position.distanceTo(forceSphere)
        if (distToForce < forceRadius) {
          const dir = a.position.clone().sub(forceSphere).normalize()
          const push = (forceRadius - distToForce) * 0.4
          a.position.addScaledVector(dir, push)
        } else {
          a.position.lerp(a.userData.target, delta * 0.15)
        }
      }

      const minDist = radius * 2
      const minDistSq = minDist * minDist
      for (let i = 0; i < spheres.length; i++) {
        const a = spheres[i]
        const ap = a.position
        for (let j = i + 1; j < spheres.length; j++) {
          const b = spheres[j]
          const bp = b.position
          const dx = ap.x - bp.x
          const dy = ap.y - bp.y
          const dz = ap.z - bp.z
          const d2 = dx * dx + dy * dy + dz * dz
          if (d2 > 1e-8 && d2 < minDistSq) {
            const d = Math.sqrt(d2)
            const overlap = (minDist - d) * 0.5
            const nx = dx / d
            const ny = dy / d
            const nz = dz / d
            ap.x += nx * overlap
            ap.y += ny * overlap
            ap.z += nz * overlap
            bp.x -= nx * overlap
            bp.y -= ny * overlap
            bp.z -= nz * overlap
          }
        }
      }

      for (let i = 0; i < spheres.length; i++) {
        const a = spheres[i]
        a.rotation.x += 0.001
        a.rotation.y += 0.0015
      }

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", onMouseMove)
      containerRef?.current?.removeEventListener("click", onClick)
      renderer.dispose()
      geometry.dispose()
      materials.forEach((m) => m.dispose())
    }
  }, [containerRef])

  return <canvas ref={canvasRef} className={`${className} w-full h-full`} />
}

export default Spheres
