import React, { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function FullpagePortfolio() {
    const sections = [
        { id: "home", title: "Home", color: "bg-slate-900" },
        { id: "about", title: "About", color: "bg-gray-900" },
        { id: "skills", title: "Skills", color: "bg-cyan-950" },
        { id: "projects", title: "Projects", color: "bg-indigo-950" },
        { id: "experience", title: "Experience", color: "bg-blue-950" },
        { id: "services", title: "Services", color: "bg-slate-800" },
        { id: "testimonials", title: "Testimonials", color: "bg-blue-950" },
        { id: "contact", title: "Contact", color: "bg-slate-900" },
    ];

    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    const animatingRef = useRef(false);
    const touchStartX = useRef(null);

    const animateTo = (newIndex) => {
        if (animatingRef.current) return;
        const bounded = Math.max(0, Math.min(sections.length - 1, newIndex));
        if (bounded === index) return;
        animatingRef.current = true;
        setIndex(bounded);
        setTimeout(() => (animatingRef.current = false), 900);
    };

    // ✅ Scroll handler (only one section per scroll)
    const onWheel = (e) => {
        if (animatingRef.current) return;
        const delta = e.deltaY;
        const threshold = 40;
        if (Math.abs(delta) < threshold) return;
        if (delta > 0) animateTo(index + 1);
        else if (delta < 0) animateTo(index - 1);
        animatingRef.current = true;
        setTimeout(() => (animatingRef.current = false), 1000);
    };

    // ✅ Touch swipe
    const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
    const onTouchEnd = (e) => {
        if (touchStartX.current == null) return;
        const dx = touchStartX.current - e.changedTouches[0].clientX;
        const threshold = 40;
        if (dx > threshold) animateTo(index + 1);
        else if (dx < -threshold) animateTo(index - 1);
        touchStartX.current = null;
    };

    // ✅ Keyboard navigation
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

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.style.transform = `translateX(-${index * 100}vw)`;
    }, [index]);

    return (
        <div
            className="relative h-screen w-screen overflow-hidden"
            onWheel={onWheel}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* Sections container */}
            <div
                ref={containerRef}
                className="flex h-full w-[10000vw] transform transition-transform duration-700 ease-[cubic-bezier(.2,.9,.2,1)]"
            >
                {sections.map((s, i) => (
                    <section
                        key={s.id}
                        className={`flex h-screen w-screen items-center justify-center text-white ${s.color}`}
                    >
                        {s.id === "home" && <Home />}
                        {s.id === "about" && <About />}
                        {s.id === "skills" && <Skills />}
                        {s.id === "projects" && <Projects />}
                        {s.id === "experience" && <Experience />}
                        {s.id === "services" && <Services />}
                        {s.id === "testimonials" && <Testimonials />}
                        {s.id === "contact" && <Contact />}
                    </section>
                ))}
            </div>

            {/* Dots navigation */}
            <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                {sections.map((s, i) => (
                    <div
                        key={s.id}
                        onClick={() => animateTo(i)}
                        className={`h-3 w-3 rounded-full border border-white/30 cursor-pointer transition-all ${i === index ? "bg-white scale-110" : "bg-white/40"
                            }`}
                    />
                ))}
            </nav>

            {/* Arrows */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                <button
                    onClick={() => animateTo(index - 1)}
                    className="text-white/90 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg"
                >
                    ◀
                </button>
                <button
                    onClick={() => animateTo(index + 1)}
                    className="text-white/90 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg"
                >
                    ▶
                </button>
            </div>

            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                Use mouse wheel / swipe / ← → keys
            </div>
        </div>
    );
}
