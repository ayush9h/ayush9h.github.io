"use client"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"
import gsap from "gsap"

const Spheres = ({ className = "", containerRef }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Start with canvas hidden
    canvas.style.opacity = 0

    // ----- Scene & Camera -----
    const scene = new THREE.Scene()
    const width = canvas.offsetWidth || 800
    const height = canvas.offsetHeight || 600
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 200)
    camera.position.z = 60

    // ----- Renderer -----
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.outputColorSpace = THREE.SRGBColorSpace

    // ----- Lights -----
    scene.add(new THREE.AmbientLight(0xffffff, 0.35))
    const pointLight = new THREE.PointLight(0xffffff, 1.4)
    pointLight.position.set(15, 15, 15)
    scene.add(pointLight)

    // ----- Spheres -----
    const spheres = []
    const radius = 8
    const geometry = new THREE.SphereGeometry(radius, 32, 32)
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.25, metalness: 0.1, envMapIntensity: 1.0 }),
      new THREE.MeshStandardMaterial({ color: 0x2266cc, roughness: 0.35, metalness: 0.3, envMapIntensity: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.15, envMapIntensity: 1.2 }),
    ]

    const areaSize = 40
    for (let i = 0; i < 25; i++) {
      const sphere = new THREE.Mesh(geometry, materials[i % 3])
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * areaSize,
        (Math.random() - 0.5) * areaSize,
        (Math.random() - 0.5) * areaSize * 0.5
      )
      sphere.position.copy(pos)
      sphere.userData.target = pos.clone()
      spheres.push(sphere)
      scene.add(sphere)
    }

    // ----- Interaction -----
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const forceSphere = new THREE.Vector3(0, 0, 0)
    const forceRadius = radius * 2.2
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const intersection = new THREE.Vector3()

    const onMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      if (raycaster.ray.intersectPlane(plane, intersection)) {
        forceSphere.copy(intersection)
      }
    }
    window.addEventListener("mousemove", onMouseMove)

    let colorIndex = 0
    const colors = [0xffff00, 0xff0000, 0x00ff00]
    const onClick = () => {
      colorIndex = (colorIndex + 1) % colors.length
      materials[1].color.setHex(colors[colorIndex])
    }
    containerRef?.current?.addEventListener("click", onClick)

    // ----- Animation -----
    const clock = new THREE.Clock()
    const minDist = radius * 2
    const minDistSq = minDist * minDist

    const animate = () => {
      requestAnimationFrame(animate)
      const delta = clock.getDelta()

      for (const a of spheres) {
        const distToForce = a.position.distanceTo(forceSphere)
        if (distToForce < forceRadius) {
          const dir = a.position.clone().sub(forceSphere).normalize()
          const push = (forceRadius - distToForce) * 0.4
          a.position.addScaledVector(dir, push)
        } else {
          a.position.lerp(a.userData.target, delta * 0.15)
        }
      }

      for (let i = 0; i < spheres.length; i++) {
        const a = spheres[i]
        for (let j = i + 1; j < spheres.length; j++) {
          const b = spheres[j]
          const dx = a.position.x - b.position.x
          const dy = a.position.y - b.position.y
          const dz = a.position.z - b.position.z
          const d2 = dx * dx + dy * dy + dz * dz
          if (d2 > 1e-8 && d2 < minDistSq) {
            const d = Math.sqrt(d2)
            const overlap = (minDist - d) * 0.5
            const nx = dx / d
            const ny = dy / d
            const nz = dz / d
            a.position.x += nx * overlap
            a.position.y += ny * overlap
            a.position.z += nz * overlap
            b.position.x -= nx * overlap
            b.position.y -= ny * overlap
            b.position.z -= nz * overlap
          }
        }
      }

      for (const a of spheres) {
        a.rotation.x += 0.001
        a.rotation.y += 0.0015
      }

      renderer.render(scene, camera)
    }

    // ----- HDR Loading with fade-in -----
    new RGBELoader().load("/studio_small_09_4k.hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping
      scene.environment = texture
      animate() // start animation after HDR is ready
      gsap.to(canvas, { opacity: 1, duration: 1 }) // smooth fade-in
    })

    // ----- Resize -----
    const handleResize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", handleResize)

    // ----- Cleanup -----
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
