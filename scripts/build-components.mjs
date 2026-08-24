import fs from "fs";
import path from "path";

function write(relPath, content) {
  const fullPath = path.resolve(relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
  console.log("Created:", relPath);
}

// 1. components/3d/WealthCanvas.tsx
write("components/3d/WealthCanvas.tsx", `"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WealthCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Golden Core Polyhedron (Icosahedron + Wireframe)
    const icoGeometry = new THREE.IcosahedronGeometry(2.8, 1);
    const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.35,
      linewidth: 1,
    });
    const icosahedronLines = new THREE.LineSegments(icoWireframe, lineMaterial);
    mainGroup.add(icosahedronLines);

    // Inner glowing sphere
    const innerSphereGeo = new THREE.SphereGeometry(1.4, 24, 24);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    mainGroup.add(innerSphere);

    // Outer Orbiting Rings
    const torusGeo = new THREE.TorusGeometry(4.2, 0.02, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.4,
    });
    const torus1 = new THREE.Mesh(torusGeo, torusMat);
    torus1.rotation.x = Math.PI / 3;
    mainGroup.add(torus1);

    const torus2 = new THREE.Mesh(torusGeo, torusMat);
    torus2.rotation.y = Math.PI / 4;
    torus2.rotation.x = -Math.PI / 6;
    mainGroup.add(torus2);

    // 2. Ambient Particle Constellation
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 35;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 25;
      scales[i / 3] = Math.random() * 0.8 + 0.2;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.12,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Topographic Wireframe Mountain Ridge (How We Help visualization)
    const mountainGeo = new THREE.PlaneGeometry(30, 20, 28, 20);
    const posAttr = mountainGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const u = posAttr.getX(i);
      const v = posAttr.getY(i);
      const distFromCenter = Math.sqrt(u * u + v * v);
      const peak = Math.max(0, 5 - distFromCenter * 0.35) * Math.cos(u * 0.25) * Math.sin(v * 0.3);
      posAttr.setZ(i, peak + Math.sin(u * 0.8) * 0.5);
    }
    mountainGeo.computeVertexNormals();

    const mountainWire = new THREE.WireframeGeometry(mountainGeo);
    const mountainMat = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.22,
    });
    const mountain = new THREE.LineSegments(mountainWire, mountainMat);
    mountain.position.set(0, -12, -4);
    mountain.rotation.x = -Math.PI / 2.5;
    scene.add(mountain);

    // Floating Peak Beacon
    const beaconGeo = new THREE.OctahedronGeometry(0.5, 0);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
    });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(0, -9, 0);
    scene.add(beacon);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xd4af37, 2, 30);
    goldPointLight.position.set(5, 5, 8);
    scene.add(goldPointLight);

    const cyanPointLight = new THREE.PointLight(0x0ea5e9, 2, 30);
    cyanPointLight.position.set(-5, -5, 6);
    scene.add(cyanPointLight);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Scroll Tracking with Dampened Lerp
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
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      scrollY += (targetScrollY - scrollY) * 0.08;
      const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      if (!prefersReducedMotion) {
        icosahedronLines.rotation.x = elapsedTime * 0.15;
        icosahedronLines.rotation.y = elapsedTime * 0.2;
        innerSphere.rotation.y = -elapsedTime * 0.25;
        torus1.rotation.z = elapsedTime * 0.1;
        torus2.rotation.z = -elapsedTime * 0.12;

        beacon.rotation.y = elapsedTime * 0.8;
        beacon.position.y = -9 + Math.sin(elapsedTime * 1.5) * 0.3;

        const targetX = Math.sin(scrollProgress * Math.PI * 3) * 4.5 + mouseX * 1.2;
        const targetY = (scrollProgress * 14) - 2 - mouseY * 0.8;

        mainGroup.position.x += (targetX - mainGroup.position.x) * 0.06;
        mainGroup.position.y += (targetY - mainGroup.position.y) * 0.06;
        mainGroup.scale.setScalar(1 + Math.sin(scrollProgress * Math.PI) * 0.4);

        mountain.position.y = -12 + scrollProgress * 15;
        mountain.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.15;

        camera.position.x = mouseX * 0.8;
        camera.position.y = -mouseY * 0.8;
        camera.lookAt(0, 0, 0);

        particles.rotation.y = elapsedTime * 0.03 + scrollProgress * 0.5;
        particles.rotation.x = scrollProgress * 0.3;
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
      icoGeometry.dispose();
      lineMaterial.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      mountainGeo.dispose();
      mountainMat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-65 transition-opacity duration-1000"
      style={{ willChange: "transform" }}
    />
  );
}
`);

// 2. components/ui/Button.tsx
write("components/ui/Button.tsx", `"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-navy-900 text-white hover:bg-navy-800 shadow-md hover:shadow-lg hover:shadow-navy-900/20 focus:ring-navy-900",
    secondary:
      "bg-compound-blue text-white hover:bg-compound-dark shadow-md hover:shadow-compound-blue/25 focus:ring-compound-blue",
    gold:
      "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold hover:from-gold-400 hover:to-gold-500 shadow-md hover:shadow-gold-500/25 focus:ring-gold-500",
    outline:
      "border border-slate-300 text-slate-800 hover:border-navy-900 hover:bg-navy-900 hover:text-white focus:ring-navy-900 bg-white/70 backdrop-blur-sm",
    ghost:
      "text-slate-700 hover:text-navy-900 hover:bg-slate-100/70 focus:ring-slate-300",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </motion.button>
  );
}
`);

// 3. components/ui/SectionHeader.tsx
write("components/ui/SectionHeader.tsx", `"use client";

import React from "react";
import { motion } from "motion/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-3.5"
        >
          <span
            className={cn(
              "px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border",
              isDark
                ? "bg-gold-500/10 text-gold-400 border-gold-500/30"
                : "bg-compound-light text-compound-dark border-compound-blue/20"
            )}
          >
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight",
          isDark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed font-light",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
`);

// 4. components/ui/AnimatedCounter.tsx
write("components/ui/AnimatedCounter.tsx", `"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = from + (to - from) * easeProgress;

      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  const formattedNumber = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
`);

// 5. components/ui/PlanBuilderModal.tsx
write("components/ui/PlanBuilderModal.tsx", `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Shield, TrendingUp, Landmark, Award } from "lucide-react";
import confetti from "canvas-confetti";

interface PlanBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlanBuilderModal({ isOpen, onClose }: PlanBuilderModalProps) {
  const [step, setStep] = useState(1);
  const [wealthStage, setWealthStage] = useState<string>("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goalOptions = [
    { id: "cashflow", label: "Budgeting & Cash-Flow Management", icon: TrendingUp },
    { id: "tax", label: "Reducing Tax Burden & IHT", icon: Shield },
    { id: "property", label: "Mortgage & Property Finance", icon: Landmark },
    { id: "retirement", label: "Generating Income in Retirement", icon: Award },
    { id: "legacy", label: "Inter-Generational Wealth Planning", icon: Sparkles },
    { id: "education", label: "Education & School Fee Planning", icon: CheckCircle2 },
  ];

  const handleGoalToggle = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0284c7", "#d4af37", "#091a32"],
    });
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setWealthStage("");
      setSelectedGoals([]);
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", notes: "" });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 my-8"
          >
            <div className="bg-navy-900 text-white p-6 sm:p-8 relative">
              <button
                onClick={resetAndClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Financial Planner</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium">Let's Build Your Plan</h3>
              <p className="text-sm text-slate-300 mt-1">
                Tell us about your aspirations so we can tailor a bespoke strategy with you.
              </p>

              {!isSubmitted && (
                <div className="mt-6 flex items-center gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={\`h-1.5 flex-1 rounded-full transition-all duration-500 \${
                        step >= s ? "bg-gold-500" : "bg-white/20"
                      }\`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              {!isSubmitted ? (
                <>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-medium text-navy-950 mb-4">
                        1. Which best describes your current stage?
                      </h4>

                      <div
                        onClick={() => setWealthStage("accumulating")}
                        className={\`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 \${
                          wealthStage === "accumulating"
                            ? "border-compound-blue bg-compound-light/60 shadow-md"
                            : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                        }\`}
                      >
                        <div className="p-3 bg-compound-blue/10 text-compound-dark rounded-xl mt-1">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-navy-900 text-base">
                            Accumulating Wealth
                          </h5>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Senior executives and business owners in their prime - focused on scaling careers, raising families, tax efficiency, and rapid capital growth.
                          </p>
                        </div>
                      </div>

                      <div
                        onClick={() => setWealthStage("accumulated")}
                        className={\`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 \${
                          wealthStage === "accumulated"
                            ? "border-gold-500 bg-gold-100/50 shadow-md"
                            : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                        }\`}
                      >
                        <div className="p-3 bg-gold-500/10 text-gold-600 rounded-xl mt-1">
                          <Landmark className="w-6 h-6" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-navy-900 text-base">
                            Accumulated Wealth
                          </h5>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                            Individuals preparing for or in retirement, managing inter-generational assets, inheritance tax, and lasting legacy structures.
                          </p>
                        </div>
                      </div>

                      <div className="pt-6 flex justify-end">
                        <button
                          disabled={!wealthStage}
                          onClick={() => setStep(2)}
                          className="px-7 py-3 bg-navy-900 text-white rounded-full text-sm font-medium hover:bg-navy-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
                        >
                          <span>Next: Focus Areas</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-medium text-navy-950 mb-3">
                        2. What key areas would you like to address? (Select all that apply)
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {goalOptions.map((goal) => {
                          const isSelected = selectedGoals.includes(goal.id);
                          return (
                            <div
                              key={goal.id}
                              onClick={() => handleGoalToggle(goal.id)}
                              className={\`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3 \${
                                isSelected
                                  ? "border-compound-blue bg-compound-light/80 text-navy-950 font-medium shadow-sm"
                                  : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                              }\`}
                            >
                              <div
                                className={\`w-5 h-5 rounded-md flex items-center justify-center border text-white transition-colors \${
                                  isSelected
                                    ? "bg-compound-blue border-compound-blue"
                                    : "border-slate-300 bg-slate-100"
                                }\`}
                              >
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                              <span className="text-xs sm:text-sm">{goal.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-6 flex justify-between items-center">
                        <button
                          onClick={() => setStep(1)}
                          className="px-5 py-2.5 text-slate-600 hover:text-navy-950 text-sm font-medium flex items-center gap-2"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          disabled={selectedGoals.length === 0}
                          onClick={() => setStep(3)}
                          className="px-7 py-3 bg-navy-900 text-white rounded-full text-sm font-medium hover:bg-navy-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
                        >
                          <span>Next: Contact Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.form
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-medium text-navy-950 mb-3">
                        3. Where should we send your personalised roadmap?
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+44 20 7390 0837"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">
                          Any specific questions or goals?
                        </label>
                        <textarea
                          rows={2}
                          placeholder="E.g., planning retirement in 5 years, reviewing multiple pension pots..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none text-sm resize-none"
                        />
                      </div>

                      <div className="pt-4 flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-5 py-2.5 text-slate-600 hover:text-navy-950 text-sm font-medium flex items-center gap-2"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-full text-sm hover:from-gold-400 hover:to-gold-500 shadow-md flex items-center gap-2 transition-all"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Request Exploratory Chat</span>
                        </button>
                      </div>
                    </motion.form>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-medium text-navy-950">
                    Thank You, {formData.name || "Valued Client"}!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your request has been received. Principal Adviser Kanishk Swarup or a specialist from our Knightsbridge team will be in touch within 24 hours to schedule your exploratory chat.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={resetAndClose}
                      className="px-8 py-3 bg-navy-900 text-white rounded-full text-sm font-medium hover:bg-navy-800 transition-all"
                    >
                      Close & Explore Website
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
`);

// 6. components/layout/Header.tsx
write("components/layout/Header.tsx", `"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import PlanBuilderModal from "../ui/PlanBuilderModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why Work With Us", href: "/why-work-with-us" },
    { name: "Your Journey With Us", href: "/journey" },
    { name: "In The News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={\`fixed top-0 left-0 right-0 z-40 transition-all duration-500 \${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-slate-200/60 py-3.5"
            : "bg-transparent py-5 sm:py-6"
        }\`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-navy-950 to-compound-blue text-white shadow-md shadow-navy-900/10 group-hover:scale-105 transition-transform duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-cyan-300"
              >
                <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.236.734-4.3 1.973-5.973" />
                <path d="M12 6a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6" />
                <path d="M12 10a2 2 0 0 1 2 2" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-serif font-bold tracking-tight text-navy-950 group-hover:text-compound-blue transition-colors">
                COMPOUND
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 -mt-1">
                Wealth Planning
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={\`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 \${
                    isActive
                      ? "text-navy-950 font-semibold"
                      : "text-slate-600 hover:text-navy-900 hover:bg-white/60"
                  }\`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsPlanModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full border border-navy-900 text-navy-900 bg-white/80 hover:bg-navy-900 hover:text-white transition-all duration-300 shadow-sm focus:outline-none"
            >
              <span>Lets Build Your Plan</span>
              <ArrowRight className="w-4 h-4 text-compound-blue group-hover:text-white" />
            </motion.button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-3.5 py-1.5 text-xs font-semibold bg-navy-900 text-white rounded-full flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>Plan</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-navy-950 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={\`text-base font-medium py-2 px-3 rounded-xl transition-colors \${
                    pathname === link.href
                      ? "bg-compound-light text-compound-dark font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }\`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsPlanModalOpen(true);
                  }}
                  className="w-full py-3 bg-navy-900 text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Lets Build Your Plan</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PlanBuilderModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </>
  );
}
`);

// 7. components/layout/Footer.tsx
write("components/layout/Footer.tsx", `"use client";

import React from "react";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative z-10 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-compound-blue to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.236.734-4.3 1.973-5.973" />
                  <path d="M12 6a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6" />
                  <path d="M12 10a2 2 0 0 1 2 2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-white">
                  COMPOUND
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400 -mt-1">
                  Wealth Planning
                </span>
              </div>
            </Link>

            <div className="text-xs text-slate-400 leading-relaxed space-y-2.5 max-w-2xl font-light">
              <p>
                Compound Wealth Planning is an Appointed Representative of and represents only St. James's Place Wealth Management plc (which is authorised and regulated by the Financial Conduct Authority) for the purpose of advising solely on the Group's wealth management products and services, more details of which are set out on the Group's website{" "}
                <a
                  href="https://www.sjp.co.uk/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  www.sjp.co.uk/products
                </a>
                .
              </p>
              <p>
                The 'St. James's Place Partnership' and the titles 'Partner' and 'Partner Practice' are marketing terms used to describe St. James's Place representatives.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/compound-wealth-planning/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 hover:bg-compound-blue text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
                </svg>
              </a>
              <a
                href="mailto:contact@compoundwealth.co.uk"
                className="w-9 h-9 rounded-full bg-navy-900 hover:bg-compound-blue text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.vouchedfor.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 h-9 rounded-full bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 border border-white/10"
              >
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>VouchedFor</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/why-work-with-us" className="hover:text-white transition-colors">
                  Why Work With Us
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-white transition-colors">
                  Your Journey With Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  In The News & Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Site Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-start lg:items-end space-y-3">
            <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Senior Partner Practice
            </span>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
              <span className="font-serif text-lg font-bold tracking-tight text-white">
                St. James's
              </span>
              <span className="font-serif text-lg font-bold tracking-tight text-gold-400 -mt-1">
                Place
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 mt-1">
                Wealth Management
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 bg-navy-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Compound Wealth Planning. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
              Disclaimer
            </Link>
            <span className="text-slate-600">Knightsbridge, London SW3 1JJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
`);

// 8. components/sections/HeroSection.tsx
write("components/sections/HeroSection.tsx", `"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Award, TrendingUp } from "lucide-react";
import PlanBuilderModal from "../ui/PlanBuilderModal";

export default function HeroSection() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-16 sm:py-24">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-compound-blue/10 via-gold-400/5 to-cyan-300/10 blur-[130px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md mb-8 text-xs font-semibold uppercase tracking-wider text-slate-700"
        >
          <span className="w-2 h-2 rounded-full bg-compound-blue animate-pulse" />
          <span>Senior Partner Practice of St. James's Place</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-navy-950 max-w-5xl mx-auto leading-[1.08]"
        >
          Clear Financial Planning for a{" "}
          <span className="italic font-normal text-navy-900 relative inline-block">
            Confident Tomorrow
            <svg
              className="absolute -bottom-2 left-0 w-full text-gold-400/60 h-3"
              viewBox="0 0 250 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M3 9C60 3 190 3 247 9"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-base sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
        >
          We are here to make financial planning easy to understand and to help clients make smart and well-thought-out decisions on any money-related matters - so they can enjoy today and feel confident about tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsPlanModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-navy-900 text-white font-medium text-sm sm:text-base rounded-full shadow-lg shadow-navy-950/20 hover:bg-navy-800 transition-all flex items-center justify-center gap-3"
          >
            <span>Lets Build Your Plan</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </motion.button>

          <Link
            href="/why-work-with-us"
            className="w-full sm:w-auto px-8 py-4 bg-white/80 text-navy-900 border border-slate-300 hover:border-navy-900 font-medium text-sm sm:text-base rounded-full shadow-sm hover:bg-white transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <span>Why Work With Us</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 sm:mt-28 pt-10 border-t border-slate-200/60 max-w-4xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 mb-6">
            As Featured In & Industry Recognition
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-600" />
              <span className="font-serif font-bold text-lg text-slate-800 tracking-tight">
                MONEYAge
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div className="flex flex-col text-left">
                <span className="font-bold text-sm text-slate-800 leading-none">vouchedfor</span>
                <span className="text-[9px] text-slate-600 font-semibold">TOP RATED 2024</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-compound-blue" />
              <span className="font-serif font-bold text-base text-slate-800 tracking-wider">
                FT ADVISER
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-slate-800">
              <span>FINANCIAL TIMES</span>
              <span className="text-[10px] text-slate-600 font-sans font-normal">Diversity Awards</span>
            </div>
          </div>
        </motion.div>
      </div>

      <PlanBuilderModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </section>
  );
}
`);

// 9. components/sections/MoreThanAdvice.tsx
write("components/sections/MoreThanAdvice.tsx", `"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Award } from "lucide-react";

export default function MoreThanAdvice() {
  return (
    <section className="py-20 sm:py-28 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-compound-light text-compound-dark text-xs font-semibold uppercase tracking-wider border border-compound-blue/20">
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-navy-950 leading-tight">
              More than <br />
              <span className="italic font-normal text-compound-blue">Financial Advice</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              <p>
                At Compound Wealth Planning, we take responsibility for making your financial life simpler, clearer, and more aligned with your aspirations. We go beyond advice - working with you to proactively plan, provide technical expertise, and implement the strategies we agree on.
              </p>
              <p>
                Through personalised financial coaching and disciplined wealth management, we help ensure that every decision moves you closer to the life and legacy you want to build.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-gold-600 font-semibold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Founded by Award-Winning Adviser Kanishk Swarup</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Highly Commended Financial Adviser of the Year at the <em>Financial Times Diversity Awards 2023</em> - with 10 years as a financial adviser and another decade as an Equity Derivatives trader at global investment banks including <strong>Credit Suisse, JP Morgan, and BNP Paribas</strong>.
              </p>
              <p className="text-xs text-slate-500 font-medium">
                We specialise in guiding high-net-worth, time-scarce individuals seeking financial planning and advice to protect and grow their family's wealth.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/why-work-with-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-compound-blue transition-colors group"
              >
                <span>Read Kanishk's Founder Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/70 group">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000"
                alt="Family enjoying financial freedom together in nature"
                className="w-full h-[450px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center font-bold">
                    20+
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                      Years Financial Expertise
                    </h4>
                    <p className="text-xs text-slate-500">
                      Combining institutional investment banking with bespoke private advisory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`);

// 10. components/sections/WhoWeHelp.tsx
write("components/sections/WhoWeHelp.tsx", `"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Landmark, ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import PlanBuilderModal from "../ui/PlanBuilderModal";

export default function WhoWeHelp() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const accumulatingItems = [
    "Budgeting & Cash-flow management",
    "Family Protection & Specialist Insurance",
    "Mortgage & Property Finance",
    "Education Fee Planning",
    "Reducing tax burden",
    "Reducing Risk & increasing potential investment returns",
  ];

  const accumulatedItems = [
    "Generating income in retirement",
    "Investments & Risk Management",
    "Reducing Inheritance Tax (IHT)",
    "Later life planning",
    "Legacy and Inter-generational Wealth Planning",
  ];

  return (
    <section className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tailored Advisory"
          title="Who We Help"
          subtitle="Whether you are rapidly accelerating your wealth or safeguarding a multi-generational legacy, our strategies are meticulously structured around your life stage."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 sm:p-10 bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col justify-between relative overflow-hidden group transition-all"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-compound-blue to-cyan-400" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-compound-light text-compound-dark flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-compound-blue">
                Stage One
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-navy-950 mt-1 mb-3">
                Clients who are Accumulating Wealth
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-8">
                Senior executives and business owners in their prime - focused on raising families, scaling their careers, and accelerating their capital.
              </p>

              <div className="space-y-3.5 pt-2 border-t border-slate-100">
                {accumulatingItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-compound-blue shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <button
                onClick={() => setIsPlanModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-full bg-slate-100 hover:bg-navy-900 text-slate-800 hover:text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>Plan Your Wealth Accumulation</span>
                <ArrowRight className="w-4 h-4 text-compound-blue group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 sm:p-10 bg-navy-950 text-white border border-navy-800 shadow-2xl flex flex-col justify-between relative overflow-hidden group transition-all"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-500 to-amber-300" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Landmark className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                Stage Two
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white mt-1 mb-3">
                Clients who have Accumulated Wealth
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
                Individuals preparing for retirement, managing generational wealth, and planning a meaningful legacy with the capital they have built.
              </p>

              <div className="space-y-3.5 pt-2 border-t border-navy-800">
                {accumulatedItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-navy-800">
              <button
                onClick={() => setIsPlanModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
              >
                <span>Structure Your Legacy & Retirement</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <PlanBuilderModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </section>
  );
}
`);

// 11. components/sections/HowWeHelpMountain.tsx
write("components/sections/HowWeHelpMountain.tsx", `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mountain, Compass, Shield, Target, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

interface Milestone {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
}

export default function HowWeHelpMountain() {
  const [activeMilestone, setActiveMilestone] = useState<string>("wealth");

  const milestones: Milestone[] = [
    {
      id: "budgeting",
      title: "Personal Budgeting",
      category: "Foundation",
      description: "Optimising cash flows and liquidity buffers so your daily money decisions fuel long-term growth automatically.",
      deliverables: ["Income & Expenditure Structuring", "Emergency Reserve Sizing", "Automated Savings Allocations"],
    },
    {
      id: "education",
      title: "Education & Family",
      category: "Protection",
      description: "Structured provisions for private school fees, university funds, and comprehensive income protection for your dependents.",
      deliverables: ["School Fee Trust Modelling", "Junior ISAs & Gifting", "Family Income Benefit"],
    },
    {
      id: "property",
      title: "Property Finance",
      category: "Assets",
      description: "Navigating high-value first charge mortgages, buy-to-let portfolios, and commercial property structuring.",
      deliverables: ["Whole-of-Market Intermediary Sourcing", "Refinancing & Equity Release", "Portfolio Leverage Strategy"],
    },
    {
      id: "wealth",
      title: "Wealth Management",
      category: "Growth",
      description: "Discretionary asset allocation with St. James's Place institutional fund managers, balancing global diversification with disciplined risk controls.",
      deliverables: ["Risk Tolerance Calibration", "Tax-Efficient Wrappers (ISA/GIA)", "Active Fund Management"],
    },
    {
      id: "business",
      title: "Business Planning",
      category: "Commercial",
      description: "Corporate pension schemes, key person insurance, director profit extraction, and tax-efficient exit planning.",
      deliverables: ["Director Pension Extraction", "Relevant Life Policies", "Business Succession Structuring"],
    },
    {
      id: "retirement",
      title: "Retirement Planning",
      category: "Legacy",
      description: "Cash flow modelling to ensure perpetual income drawdown, lifetime allowance optimisation, and seamless estate transfer.",
      deliverables: ["Pension Consolidation", "Tax-Free Cash Optimisation", "Inheritance Tax Exemption Strategies"],
    },
  ];

  const current = milestones.find((m) => m.id === activeMilestone) || milestones[3];

  return (
    <section className="py-20 sm:py-28 relative z-10 overflow-hidden bg-gradient-to-b from-transparent via-slate-50/80 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Planning Journey"
          title="How We Help"
          subtitle="Financial freedom is not a single decision - it is an ascending journey. We guide every step from your financial foundations to the summit of lasting peace of mind."
        />

        <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl p-8 sm:p-12 overflow-hidden mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="p-4 sm:p-5 rounded-2xl bg-gold-100/60 border border-gold-400/40 text-center flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-gold-600 mb-2" />
              <h4 className="font-serif font-bold text-navy-950 text-base sm:text-lg">Peace of mind</h4>
              <p className="text-xs text-slate-500 mt-1 font-light">The ultimate financial summit</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-compound-light/60 border border-compound-blue/30 text-center flex flex-col items-center">
              <Target className="w-6 h-6 text-compound-blue mb-2" />
              <h4 className="font-serif font-bold text-navy-950 text-base sm:text-lg">Goal setting & tracking</h4>
              <p className="text-xs text-slate-500 mt-1 font-light">Real-time progress clarity</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/80 border border-slate-200 text-center flex flex-col items-center">
              <Clock className="w-6 h-6 text-slate-700 mb-2" />
              <h4 className="font-serif font-bold text-navy-950 text-base sm:text-lg">Time efficiency & Clarity</h4>
              <p className="text-xs text-slate-500 mt-1 font-light">We handle the complexity</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center flex flex-col items-center">
              <Shield className="w-6 h-6 text-emerald-600 mb-2" />
              <h4 className="font-serif font-bold text-navy-950 text-base sm:text-lg">Financial Security</h4>
              <p className="text-xs text-slate-500 mt-1 font-light">Protected against uncertainty</p>
            </div>
          </div>

          <div className="relative w-full h-40 sm:h-52 flex items-center justify-center my-4">
            <svg
              className="w-full h-full text-slate-300 stroke-current fill-none"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              <path
                d="M0 180 L150 140 L280 160 L450 40 L500 20 L550 40 L720 120 L850 90 L1000 180"
                strokeWidth="2.5"
                className="text-compound-blue/40"
              />
              <path
                d="M100 190 L300 120 L500 20 L700 110 L900 190"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="text-gold-500/50"
              />
              <path
                d="M0 180 L150 140 L280 160 L450 40 L500 20 L550 40 L720 120 L850 90 L1000 180 L1000 200 L0 200 Z"
                fill="url(#mountainGrad)"
                opacity="0.08"
              />
              <defs>
                <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#091a32" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-lg animate-bounce">
                <Mountain className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-navy-950 uppercase tracking-widest bg-white px-2 py-0.5 rounded shadow-sm mt-1 border border-slate-200">
                Peak
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 pt-6 border-t border-slate-100">
            {milestones.map((m) => {
              const isActive = activeMilestone === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMilestone(m.id)}
                  className={\`p-3 rounded-2xl text-center transition-all duration-300 relative \${
                    isActive
                      ? "bg-navy-900 text-white shadow-md scale-105"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }\`}
                >
                  <span className="text-xs font-semibold block">{m.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl p-8 sm:p-10 bg-navy-950 text-white border border-navy-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>{current.category} Milestone</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white">
                {current.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {current.description}
              </p>
            </div>

            <div className="w-full md:w-auto bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-md shrink-0 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-2">
                Key Strategic Outputs
              </span>
              {current.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
`);

// 12. components/sections/TeamPreview.tsx
write("components/sections/TeamPreview.tsx", `"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, UserCheck } from "lucide-react";
import { teamMembers } from "@/data/teamData";

export default function TeamPreview() {
  return (
    <section className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider border border-slate-200">
              <UserCheck className="w-3.5 h-3.5 text-compound-blue" />
              <span>Multi-Disciplinary Team</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-navy-950 leading-tight">
              Expertise, <br />
              <span className="italic font-normal text-compound-blue">working together.</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed font-light">
              <p>
                Financial planning is rarely about just one decision. That's why our team works together to bring the right expertise to every stage of your journey, from building wealth and protecting your family to planning for retirement and beyond.
              </p>
              <p>
                When specialist knowledge is needed, we also have access to the wider expertise and resources of St. James's Place, giving you the confidence that every aspect of your financial plan is supported by the right people.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/why-work-with-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-900 text-white text-xs sm:text-sm font-semibold hover:bg-navy-800 transition-all shadow-md group"
              >
                <span>About Us & Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.slice(0, 3).map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg flex flex-col group transition-all"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-navy-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                      {member.credentials || "Adviser"}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-navy-950 group-hover:text-compound-blue transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{member.role}</p>
                  </div>

                  <Link
                    href={\`/team/\${member.slug}\`}
                    className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-compound-blue pt-3 border-t border-slate-100"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/60">
          {teamMembers.slice(3).map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-4 bg-white/70 border border-slate-200 shadow-sm backdrop-blur-sm flex items-center gap-4 group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-xl object-cover object-top shadow-sm shrink-0"
              />
              <div className="flex-grow min-w-0">
                <h4 className="font-serif font-bold text-sm text-navy-950 truncate group-hover:text-compound-blue transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-slate-500 truncate">{member.role}</p>
                <Link
                  href={\`/team/\${member.slug}\`}
                  className="text-[11px] font-semibold text-compound-blue hover:underline inline-flex items-center gap-1 mt-1"
                >
                  <span>Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// 13. components/sections/InstitutionalStrength.tsx
write("components/sections/InstitutionalStrength.tsx", `"use client";

import React from "react";
import { motion } from "motion/react";
import { Landmark, Star } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function InstitutionalStrength() {
  return (
    <section className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 lg:p-16 border border-navy-800 shadow-2xl relative overflow-hidden mb-16"
        >
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-compound-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
                <Landmark className="w-3.5 h-3.5" />
                <span>The St. James's Place Partnership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
                Personal advice. <br />
                <span className="italic font-normal text-gold-400">Institutional strength.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Experience the best of both worlds. At Compound Wealth Planning, you'll always deal with people who know you, understand your goals and genuinely care about your future. Behind every recommendation is the expertise, research and specialist support of one of the UK's largest wealth management firms. It's the personal relationship you value, with the strength and confidence you deserve.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-xs p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center flex flex-col items-center space-y-3 shadow-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Senior Partner Practice
                </span>
                <div className="py-2">
                  <span className="font-serif text-3xl font-bold tracking-tight text-white block">
                    St. James's
                  </span>
                  <span className="font-serif text-3xl font-bold tracking-tight text-gold-400 block -mt-1">
                    Place
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-cyan-300 font-semibold">
                  Wealth Management
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-serif font-medium text-navy-950">
            St. James's Place in numbers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/80 border border-slate-200 shadow-lg backdrop-blur-md flex flex-col items-center justify-center space-y-2 group hover:border-compound-blue transition-all"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              The UK's
            </span>
            <div className="text-5xl sm:text-6xl font-serif font-bold text-navy-950">
              #<AnimatedCounter to={1} duration={1.5} />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xs">
              wealth management company by funds under management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/80 border border-slate-200 shadow-lg backdrop-blur-md flex flex-col items-center justify-center space-y-2 group hover:border-gold-500 transition-all"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              Looking After
            </span>
            <div className="text-5xl sm:text-6xl font-serif font-bold text-navy-950">
              £<AnimatedCounter to={220} duration={2} />bn
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xs">
              worth of client assets under stewardship
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/80 border border-slate-200 shadow-lg backdrop-blur-md flex flex-col items-center justify-center space-y-2 group hover:border-emerald-500 transition-all"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              With a Rating of
            </span>
            <div className="text-5xl sm:text-6xl font-serif font-bold text-navy-950 flex items-center justify-center gap-1">
              <AnimatedCounter to={4.9} decimals={2} duration={2} />
              <Star className="w-7 h-7 text-gold-500 fill-gold-500 inline-block -mt-1" />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xs">
              out of 5 on VouchedFor across more than 42,000 reviews
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-6">
          <span className="text-[11px] text-slate-600 italic">
            Information correct as at December 2023.
          </span>
        </div>
      </div>
    </section>
  );
}
`);

// 14. components/sections/InTheNewsSection.tsx
write("components/sections/InTheNewsSection.tsx", `"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Radio, Newspaper } from "lucide-react";
import { newsArticles } from "@/data/newsData";
import SectionHeader from "../ui/SectionHeader";

export default function InTheNewsSection() {
  return (
    <section className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Thought Leadership & Media"
          title="In The News"
          subtitle="Insights, podcast interviews, and technical commentary from our advisers on market trends, tax regulations, and wealth management strategy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {newsArticles.slice(0, 2).map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="relative h-60 sm:h-72 overflow-hidden bg-navy-950">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-navy-900/90 text-gold-400 border border-gold-500/30 backdrop-blur-md flex items-center gap-1.5">
                      {article.category === "Podcast" ? (
                        <Radio className="w-3.5 h-3.5 text-cyan-400" />
                      ) : (
                        <Newspaper className="w-3.5 h-3.5 text-gold-400" />
                      )}
                      <span>{article.category}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-slate-300 font-medium block mb-1">
                      {article.publication} • {article.date}
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl leading-snug group-hover:text-gold-300 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href="/news"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-navy-900 text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group/link"
                >
                  <span>Go to link</span>
                  <ArrowRight className="w-3.5 h-3.5 text-compound-blue group-hover/link:text-white transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-compound-blue transition-colors group"
          >
            <span>Browse All Articles & Media Appearances</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
`);

// 15. components/sections/FourStepProcess.tsx
write("components/sections/FourStepProcess.tsx", `"use client";

import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Search, FileText, CheckCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function FourStepProcess() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "No-obligation exploratory chat",
      description: "An informal 30-minute conversation to discuss your financial aspirations, time horizons, and where you need clarity.",
    },
    {
      number: "02",
      icon: Search,
      title: "Getting to know you & your priorities",
      description: "A deep dive into your assets, liabilities, family dynamics, tax exposure, and risk appetite to capture your full picture.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Building your roadmap together",
      description: "We rigorously model scenarios, stress-test strategies, and leverage SJP institutional fund management to construct your plan.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Presenting your personalised financial plan",
      description: "Clear, transparent walkthrough of our recommendations, followed by ongoing proactive monitoring to keep you on track.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="A Structured Roadmap"
          title="Our 4-Step Planning Process"
          subtitle="We exist because we feel Financial Planning is a critical pillar that every individual and family needs to focus on proactively. We take this responsibility on your behalf."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-white/90 border border-slate-200 shadow-xl flex flex-col justify-between backdrop-blur-md relative group transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-bold text-slate-300 group-hover:text-gold-500 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-compound-light text-compound-dark flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-navy-950 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-compound-blue uppercase tracking-wider">
                  <span>Step {step.number}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`);

// 16. components/sections/TestimonialsGrid.tsx
write("components/sections/TestimonialsGrid.tsx", `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";
import { testimonials } from "@/data/testimonialsData";
import SectionHeader from "../ui/SectionHeader";

export default function TestimonialsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Investment", "Mortgage", "Tax & Planning", "Retirement"];

  const filteredTestimonials =
    activeCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Client Feedback"
          title="What Our Clients Say"
          subtitle="We believe in creating an environment of transparency and authenticity. That's why we are sharing what our clients have said about us on VouchedFor, an independent platform that collects genuine client feedback without any moderation from us."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center">
          <a
            href="https://www.vouchedfor.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-900 text-white text-xs sm:text-sm font-semibold hover:bg-navy-800 transition-all shadow-md group"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>View more client reviews directly on VouchedFor</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={\`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 \${
                activeCategory === cat
                  ? "bg-navy-900 text-white shadow-sm"
                  : "bg-white/80 hover:bg-slate-100 text-slate-600 border border-slate-200"
              }\`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredTestimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col justify-between relative overflow-hidden group transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    {t.category}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-slate-700 text-sm leading-relaxed font-light italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-navy-950">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      Advised by <span className="text-compound-blue">{t.adviser}</span>
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12 text-xs text-slate-500 italic max-w-2xl mx-auto">
          The reviews shown above have been gathered and displayed directly through VouchedFor and have not been verified by SJP.
        </div>
      </div>
    </section>
  );
}
`);

// 17. components/sections/ContactSection.tsx
write("components/sections/ContactSection.tsx", `"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import SectionHeader from "../ui/SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#0284c7", "#d4af37", "#091a32"],
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Start the Conversation"
          title="Contact us"
          subtitle="Speak with our Knightsbridge advisory team about your personal finances, wealth accumulation, or property goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-compound-light text-compound-dark flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Contact Us
                  </span>
                  <a
                    href="tel:+442073900837"
                    className="text-lg sm:text-xl font-serif font-bold text-navy-950 hover:text-compound-blue transition-colors block mt-0.5"
                  >
                    +44 20 7390 0837
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Opening Hours
                  </span>
                  <p className="text-sm font-semibold text-navy-950 mt-0.5">
                    Monday to Friday
                  </p>
                  <p className="text-xs text-slate-500">9:00am - 5:00pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-navy-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-navy-950 mt-0.5">
                    116 Brompton Road, Knightsbridge
                  </p>
                  <p className="text-xs text-slate-500">London, SW3 1JJ</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative h-64 bg-slate-100">
              <iframe
                title="Knightsbridge Office Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=116%20Brompton%20Road,%20Knightsbridge,%20London,%20SW3%201JJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1.5 rounded-xl shadow-md border border-slate-200 text-xs font-semibold text-navy-950 flex items-center gap-1.5 backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-compound-blue" />
                <span>Knightsbridge Office</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-2xl relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none text-sm bg-slate-50/50 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none text-sm bg-slate-50/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 20 7390 0837"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none text-sm bg-slate-50/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please share what you are hoping to achieve with your financial planning..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none text-sm bg-slate-50/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm shadow-xl shadow-navy-950/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Submit</span>
                    <Send className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-slate-500 leading-relaxed pt-2">
                    Compound Wealth Planning together with St. James's Place Wealth Management plc are the data controllers of any personal data you provide to us. For further information on our uses of your personal data, please see the Compound Wealth Planning Privacy Policy or the St. James's Place Privacy Policy.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-medium text-navy-950">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our Knightsbridge team has received your enquiry and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`);

// 18. app/layout.tsx
write("app/layout.tsx", `import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WealthCanvas from "@/components/3d/WealthCanvas";

export const metadata: Metadata = {
  title: "Compound Wealth Planning | Senior Partner Practice of St. James's Place",
  description:
    "Clear Financial Planning for a Confident Tomorrow. Bespoke wealth management, mortgage advice, and inter-generational planning based in Knightsbridge, London.",
  keywords: [
    "Compound Wealth Planning",
    "Financial Adviser London",
    "St. James's Place Knightsbridge",
    "Wealth Management",
    "Mortgage Advice",
    "Retirement Planning",
    "Kanishk Swarup",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#fbfaf8] text-slate-800 antialiased min-h-screen flex flex-col relative selection:bg-cyan-500/20 selection:text-navy-950">
        <WealthCanvas />
        <Header />
        <main className="flex-grow relative z-10 pt-20 sm:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`);

// 19. app/page.tsx
write("app/page.tsx", `import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import MoreThanAdvice from "@/components/sections/MoreThanAdvice";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import HowWeHelpMountain from "@/components/sections/HowWeHelpMountain";
import TeamPreview from "@/components/sections/TeamPreview";
import InstitutionalStrength from "@/components/sections/InstitutionalStrength";
import InTheNewsSection from "@/components/sections/InTheNewsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-8 sm:space-y-16">
      <HeroSection />
      <MoreThanAdvice />
      <WhoWeHelp />
      <HowWeHelpMountain />
      <TeamPreview />
      <InstitutionalStrength />
      <InTheNewsSection />
    </div>
  );
}
`);

// 20. app/journey/page.tsx
write("app/journey/page.tsx", `import React from "react";
import FourStepProcess from "@/components/sections/FourStepProcess";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import ContactSection from "@/components/sections/ContactSection";

export default function JourneyPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 sm:space-y-28">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold uppercase tracking-wider border border-gold-300 mb-6">
          <span>Our Core Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-medium text-navy-950 leading-tight mb-8">
          Taking Responsibility For Your Financial Freedom
        </h1>
        <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed">
          We exist because we feel Financial Planning is a critical pillar that every individual and family needs to focus on proactively and continuously. However, most of us struggle to find the time for it. We are on a mission to take this responsibility on behalf of our clients and help them make better financial decisions to become financially free.
        </p>
      </section>

      <FourStepProcess />
      <WhoWeHelp />
      <TestimonialsGrid />
      <ContactSection />
    </div>
  );
}
`);

// 21. app/contact/page.tsx
write("app/contact/page.tsx", `import React from "react";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-16">
      <ContactSection />
    </div>
  );
}
`);

// 22. app/disclaimer/page.tsx
write("app/disclaimer/page.tsx", `import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function DisclaimerPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="FCA Regulatory Disclosure"
          title="Site Disclaimer"
          subtitle="Important regulatory notices regarding investment advice, liability, and third-party links."
          align="left"
        />

        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl p-8 sm:p-12 space-y-6 text-slate-700 text-sm leading-relaxed font-light">
          <p>
            The information published on this website is provided as a convenience to visitors and should be used for information purposes only and is subject to change without notice. None of the information contained in this website constitutes financial or other professional advice in any way. If you require additional information, you should contact one of our personnel.
          </p>

          <p>
            While we use reasonable efforts to ensure that the information contained on this website is current and accurate at the date of publication, no warranties are made, either expressed or implied, as to reliability, accuracy or completeness of the information. We accept no liability for any loss arising directly or indirectly from the use of or action taken in reliance on such information. These documents should not be copied, reproduced or redistributed, in whole or in part.
          </p>

          <p>
            No warranty is given as to the freedom of this website from errors, defects, viruses, malicious programs or macros. Links from this website exist for information only and we accept no responsibility or liability for the information contained on any such site. The existence of a link to another website does not imply or express endorsement of its provider, product or services by us or St. James's Place. Links to this website are not permitted without our prior written consent. Please note that clicking on links to external websites will cause you to leave this website.
          </p>

          <div className="p-6 rounded-2xl bg-navy-950 text-slate-300 border border-navy-800 space-y-2 mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Appointed Representative Statement
            </h4>
            <p className="text-xs leading-relaxed">
              Compound Wealth Planning is an Appointed Representative of and represents only St. James's Place Wealth Management plc (which is authorised and regulated by the Financial Conduct Authority) for the purpose of advising solely on the Group's wealth management products and services, more details of which are set out on the Group's website{" "}
              <a
                href="https://www.sjp.co.uk/products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                www.sjp.co.uk/products
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
`);

console.log("All components and pages generated successfully!");
