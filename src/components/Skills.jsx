import React, { useEffect, useState } from "react";

export default function Skills() {
    const skills = [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML & CSS", level: 95 },
        { name: "TailwindCSS", level: 90 },
        { name: "Git & GitHub", level: 80 },
    ];

    const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimatedLevels(skills.map((s) => s.level));
        }, 300);
        return () => clearTimeout(timeout);
    }, []);

    // Split into two halves
    const midIndex = Math.ceil(skills.length / 2);
    const leftSkills = skills.slice(0, midIndex);
    const rightSkills = skills.slice(midIndex);

    return (
        <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 h-screen w-full text-white bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950">
            {/* Soft overlay for visual balance */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10"></div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)] animate-fade-in">
                Skills
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in-delay">
                Technologies I work with.
            </p>

            {/* Two-column layout */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full max-w-4xl animate-fade-in-delay2">
                {[leftSkills, rightSkills].map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-5 text-left">
                        {column.map((skill, index) => {
                            const overallIndex = colIndex * midIndex + index;
                            return (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-white text-base md:text-lg">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm text-blue-300 font-semibold">
                                            {animatedLevels[overallIndex]}%
                                        </span>
                                    </div>

                                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden shadow-inner">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-[1200ms] ease-in-out"
                                            style={{ width: `${animatedLevels[overallIndex]}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <p className="mt-10 text-gray-400 text-sm animate-fade-in-delay3">
                Always learning, improving, and exploring new technologies 🚀
            </p>
        </div>
    );
}
