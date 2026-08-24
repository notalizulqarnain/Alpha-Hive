"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WealthCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 20);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Master Groups
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    // 1. Dual-Tier Golden Celestial Polyhedra
    // Outer Icosahedron
    const outerIcoGeo = new THREE.IcosahedronGeometry(3.2, 1);
    const outerIcoWire = new THREE.WireframeGeometry(outerIcoGeo);
    const goldWireMat = new THREE.LineBasicMaterial({
      color: 0xc5a880, // Refined champagne gold
      transparent: true,
      opacity: 0.45,
    });
    const outerLattice = new THREE.LineSegments(outerIcoWire, goldWireMat);
    coreGroup.add(outerLattice);

    // Outer Vertex Glow Nodes
    const vertexPositions = outerIcoGeo.attributes.position;
    const vertexGeo = new THREE.BufferGeometry();
    vertexGeo.setAttribute("position", vertexPositions);
    const vertexMat = new THREE.PointsMaterial({
      color: 0xdfc8a5,
      size: 0.18,
      transparent: true,
      opacity: 0.85,
    });
    const vertexNodes = new THREE.Points(vertexGeo, vertexMat);
    coreGroup.add(vertexNodes);

    // Mid Dodecahedron Wireframe
    const midDodecGeo = new THREE.DodecahedronGeometry(2.4, 0);
    const midDodecWire = new THREE.WireframeGeometry(midDodecGeo);
    const midWireMat = new THREE.LineBasicMaterial({
      color: 0xb39266,
      transparent: true,
      opacity: 0.3,
    });
    const midLattice = new THREE.LineSegments(midDodecWire, midWireMat);
    coreGroup.add(midLattice);

    // Inner Glowing Cyan-Teal Refractive Core
    const innerSphereGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Compound Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const innerCore = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    coreGroup.add(innerCore);

    // 2. Orbital Planetary Rings & Satellite Energy Beads
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xc5a880,
      transparent: true,
      opacity: 0.4,
    });

    const ring1Geo = new THREE.TorusGeometry(4.6, 0.018, 16, 120);
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.9, 0.018, 16, 120);
    const ring2 = new THREE.Mesh(ring2Geo, ringMat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 6;
    coreGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(5.2, 0.018, 16, 120);
    const ring3 = new THREE.Mesh(ring3Geo, ringMat);
    ring3.rotation.z = Math.PI / 4;
    ring3.rotation.x = Math.PI / 6;
    coreGroup.add(ring3);

    // Orbiting Satellite Beads
    const satelliteGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: 0xdfc8a5 });
    const sat1 = new THREE.Mesh(satelliteGeo, satelliteMat);
    const sat2 = new THREE.Mesh(satelliteGeo, satelliteMat);
    coreGroup.add(sat1);
    coreGroup.add(sat2);

    // 3. Ambient Stardust Constellation (450 particles)
    const particleCount = 420;
    const particleGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      pPositions[i] = (Math.random() - 0.5) * 45;
      pPositions[i + 1] = (Math.random() - 0.5) * 55;
      pPositions[i + 2] = (Math.random() - 0.5) * 30;

      pVelocities[i] = (Math.random() - 0.5) * 0.005;
      pVelocities[i + 1] = (Math.random() - 0.5) * 0.005;
      pVelocities[i + 2] = (Math.random() - 0.5) * 0.005;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xc5a880,
      size: 0.14,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const constellation = new THREE.Points(particleGeo, pMat);
    scene.add(constellation);

    // 4. Interactive Dynamic Neural Links Between Nearby Particles
    const maxLinkCount = 120;
    const linkPositions = new Float32Array(maxLinkCount * 2 * 3);
    const linkGeo = new THREE.BufferGeometry();
    linkGeo.setAttribute("position", new THREE.BufferAttribute(linkPositions, 3));
    const linkMat = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.18,
    });
    const neuralLinks = new THREE.LineSegments(linkGeo, linkMat);
    scene.add(neuralLinks);

    // 5. Topographic Mountain Elevation Ridge (For "How We Help")
    const mountainGeo = new THREE.PlaneGeometry(36, 24, 32, 24);
    const pos = mountainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const r = Math.sqrt(u * u + v * v);
      const ridge = Math.max(0, 6.5 - r * 0.32) * Math.cos(u * 0.22) * Math.sin(v * 0.28);
      pos.setZ(i, ridge + Math.sin(u * 0.6) * 0.6 + Math.cos(v * 0.5) * 0.4);
    }
    mountainGeo.computeVertexNormals();

    const mountainWire = new THREE.WireframeGeometry(mountainGeo);
    const mountainMat = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.25,
    });
    const mountain = new THREE.LineSegments(mountainWire, mountainMat);
    mountain.position.set(0, -14, -6);
    mountain.rotation.x = -Math.PI / 2.3;
    scene.add(mountain);

    // Summit Peace of Mind Beacon
    const beaconGeo = new THREE.OctahedronGeometry(0.65, 0);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: 0xdfc8a5,
      wireframe: true,
    });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(0, -9.5, 0);
    scene.add(beacon);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xc5a880, 2.5, 35);
    goldLight.position.set(8, 6, 10);
    scene.add(goldLight);

    const cyanLight = new THREE.PointLight(0x0284c7, 2.2, 35);
    cyanLight.position.set(-8, -6, 8);
    scene.add(cyanLight);

    // Mouse Tracking with Spring Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Scroll Tracking
    let scrollY = 0;
    let targetScrollY = 0;
    let maxScroll = 1;

    const onScroll = () => {
      targetScrollY = window.scrollY;
      maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    };
    window.addEventListener("resize", onResize);

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth Mouse Lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Smooth Scroll Lerp
      scrollY += (targetScrollY - scrollY) * 0.06;
      const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      if (!prefersReducedMotion) {
        // 1. Core Rotations
        outerLattice.rotation.x = elapsedTime * 0.12;
        outerLattice.rotation.y = elapsedTime * 0.16;
        midLattice.rotation.y = -elapsedTime * 0.2;
        midLattice.rotation.z = elapsedTime * 0.14;
        innerCore.rotation.y = -elapsedTime * 0.28;

        // Rings & Satellites
        ring1.rotation.z = elapsedTime * 0.15;
        ring2.rotation.z = -elapsedTime * 0.18;
        ring3.rotation.y = elapsedTime * 0.12;

        const satAngle1 = elapsedTime * 0.8;
        sat1.position.set(Math.cos(satAngle1) * 4.6, Math.sin(satAngle1) * 4.6, 0);
        sat1.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 3);

        const satAngle2 = -elapsedTime * 0.7 + Math.PI;
        sat2.position.set(Math.cos(satAngle2) * 4.9, 0, Math.sin(satAngle2) * 4.9);
        sat2.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 4);

        // Beacon Animation
        beacon.rotation.y = elapsedTime * 0.75;
        beacon.rotation.x = Math.sin(elapsedTime * 1.2) * 0.2;
        beacon.position.y = -9.5 + Math.sin(elapsedTime * 1.8) * 0.35;

        // 2. Multi-Stage Scroll Choreography
        // Target X shifts:
        // 0.00 - 0.20 (Hero): Center (X = 0)
        // 0.20 - 0.45 (More Than Advice): Right (X = 4.5)
        // 0.45 - 0.70 (Who We Help): Left-Center (X = -3.5)
        // 0.70 - 0.88 (How We Help/Mountain): Center Low (X = 0, Y = -4)
        // 0.88 - 1.00 (Team/SJP/News): Right High (X = 3.8)
        let targetX = 0;
        let targetY = 0;
        let targetScale = 1.0;

        if (scrollProgress < 0.22) {
          // Hero
          const t = scrollProgress / 0.22;
          targetX = THREE.MathUtils.lerp(0, 4.2, t);
          targetY = THREE.MathUtils.lerp(0, 1.5, t);
          targetScale = THREE.MathUtils.lerp(1.0, 0.95, t);
        } else if (scrollProgress < 0.5) {
          // More than advice -> Who we help
          const t = (scrollProgress - 0.22) / 0.28;
          targetX = THREE.MathUtils.lerp(4.2, -4.0, t);
          targetY = THREE.MathUtils.lerp(1.5, 3.5, t);
          targetScale = THREE.MathUtils.lerp(0.95, 1.15, t);
        } else if (scrollProgress < 0.75) {
          // Mountain Journey
          const t = (scrollProgress - 0.5) / 0.25;
          targetX = THREE.MathUtils.lerp(-4.0, 0, t);
          targetY = THREE.MathUtils.lerp(3.5, 8.0, t);
          targetScale = THREE.MathUtils.lerp(1.15, 0.85, t);
        } else {
          // Institutional Strength & Media
          const t = (scrollProgress - 0.75) / 0.25;
          targetX = THREE.MathUtils.lerp(0, 3.5, t);
          targetY = THREE.MathUtils.lerp(8.0, 14.0, t);
          targetScale = THREE.MathUtils.lerp(0.85, 1.1, t);
        }

        // Add subtle mouse parallax
        coreGroup.position.x += (targetX + mouseX * 1.2 - coreGroup.position.x) * 0.05;
        coreGroup.position.y += (targetY - mouseY * 0.8 - coreGroup.position.y) * 0.05;
        coreGroup.scale.setScalar(targetScale);

        // Mountain elevation tracking
        mountain.position.y = -14 + scrollProgress * 16;
        mountain.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.12;

        // Dynamic Neural Link Updates
        const posArray = particleGeo.attributes.position.array as Float32Array;
        const linkPosArray = linkGeo.attributes.position.array as Float32Array;
        let lineIdx = 0;

        for (let i = 0; i < 60 && lineIdx < maxLinkCount * 6; i++) {
          const i3 = i * 3;
          const x1 = posArray[i3];
          const y1 = posArray[i3 + 1];
          const z1 = posArray[i3 + 2];

          for (let j = i + 1; j < 60 && lineIdx < maxLinkCount * 6; j++) {
            const j3 = j * 3;
            const x2 = posArray[j3];
            const y2 = posArray[j3 + 1];
            const z2 = posArray[j3 + 2];

            const distSq = (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2;
            if (distSq < 16) {
              linkPosArray[lineIdx++] = x1;
              linkPosArray[lineIdx++] = y1;
              linkPosArray[lineIdx++] = z1;
              linkPosArray[lineIdx++] = x2;
              linkPosArray[lineIdx++] = y2;
              linkPosArray[lineIdx++] = z2;
            }
          }
        }
        linkGeo.attributes.position.needsUpdate = true;

        // Camera gentle parallax
        camera.position.x = mouseX * 0.6;
        camera.position.y = -mouseY * 0.6;
        camera.lookAt(0, 0, 0);

        // Constellation Slow Ambient Drift
        constellation.rotation.y = elapsedTime * 0.02 + scrollProgress * 0.4;
        constellation.rotation.x = scrollProgress * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerIcoGeo.dispose();
      outerIcoWire.dispose();
      goldWireMat.dispose();
      vertexGeo.dispose();
      vertexMat.dispose();
      midDodecGeo.dispose();
      midDodecWire.dispose();
      midWireMat.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      ringMat.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();
      particleGeo.dispose();
      pMat.dispose();
      linkGeo.dispose();
      linkMat.dispose();
      mountainGeo.dispose();
      mountainWire.dispose();
      mountainMat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75 transition-opacity duration-1000"
      style={{ willChange: "transform" }}
    />
  );
}
