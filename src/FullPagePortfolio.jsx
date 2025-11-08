import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function FullPagePortfolio() {
    const sections = [
        { id: "home", color: "bg-slate-900" },
        { id: "about", color: "bg-gray-900" },
        { id: "skills", color: "bg-cyan-950" },
        { id: "projects", color: "bg-indigo-950" },
        { id: "experience", color: "bg-blue-950" },
        { id: "services", color: "bg-slate-800" },
        { id: "testimonials", color: "bg-blue-950" },
        { id: "contact", color: "bg-slate-900" },
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const animatingRef = useRef(false);
    const touchStartX = useRef(null);

    const animateTo = (newIndex) => {
        if (animatingRef.current) return;
        const bounded = Math.max(0, Math.min(sections.length - 1, newIndex));
        if (bounded === index) return;
        setDirection(bounded > index ? 1 : -1);
        animatingRef.current = true;
        setIndex(bounded);
        setTimeout(() => (animatingRef.current = false), 1000);
    };

    // Scroll handler
    const onWheel = (e) => {
        if (animatingRef.current) return;
        const delta = e.deltaY;
        const threshold = 40;
        if (Math.abs(delta) < threshold) return;
        if (delta > 0) animateTo(index + 1);
        else if (delta < 0) animateTo(index - 1);
    };

    // Touch swipe
    const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
    const onTouchEnd = (e) => {
        if (touchStartX.current == null) return;
        const dx = touchStartX.current - e.changedTouches[0].clientX;
        const threshold = 40;
        if (dx > threshold) animateTo(index + 1);
        else if (dx < -threshold) animateTo(index - 1);
        touchStartX.current = null;
    };

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") animateTo(index + 1);
            if (e.key === "ArrowLeft") animateTo(index - 1);
            if (e.key === "Home") animateTo(0);
            if (e.key === "End") animateTo(sections.length - 1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index]);

    const renderSection = (id) => {
        switch (id) {
            case "home":
                return <Home />;
            case "about":
                return <About />;
            case "skills":
                return <Skills />;
            case "projects":
                return <Projects />;
            case "experience":
                return <Experience />;
            case "services":
                return <Services />;
            case "testimonials":
                return <Testimonials />;
            case "contact":
                return <Contact />;
            default:
                return null;
        }
    };

    // 🔹 Framer Motion variants with smooth, natural transitions
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 120 : -120,
            opacity: 0,
            filter: "blur(6px)",
            scale: 0.98,
            position: "absolute",
        }),
        center: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            position: "absolute",
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                mass: 0.8,
            },
        },
        exit: (direction) => ({
            x: direction > 0 ? -120 : 120,
            opacity: 0,
            filter: "blur(6px)",
            scale: 0.98,
            position: "absolute",
            transition: {
                duration: 0.55,
                ease: [0.45, 0.05, 0.55, 0.95],
            },
        }),
    };

    return (
        <div
            className="relative h-screen w-screen overflow-hidden bg-slate-900"
            onWheel={onWheel}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* Animated Sections */}
            <div className="relative h-full w-full">
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.section
                        key={sections[index].id}
                        className={`absolute top-0 left-0 flex h-full w-full items-center justify-center ${sections[index].color}`}
                        variants={variants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        {renderSection(sections[index].id)}
                    </motion.section>
                </AnimatePresence>
            </div>

            {/* Dots navigation */}
            <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                {sections.map((s, i) => (
                    <motion.div
                        key={s.id}
                        onClick={() => animateTo(i)}
                        whileHover={{ scale: 1.3 }}
                        className={`h-3 w-3 rounded-full border border-white/30 cursor-pointer transition-all ${i === index
                            ? "bg-white scale-110"
                            : "bg-white/40"
                            }`}
                    />
                ))}
            </nav>

            {/* Arrows */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => animateTo(index - 1)}
                    className="text-white/90 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg"
                >
                    ◀
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => animateTo(index + 1)}
                    className="text-white/90 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg"
                >
                    ▶
                </motion.button>
            </div>

            {/* Footer Hint */}
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                Use mouse wheel / swipe / ← → keys
            </div>
        </div>
    );
}
