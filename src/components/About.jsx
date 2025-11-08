import React from "react";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 text-white">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)] animate-fade-in">
                About Me
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in-delay">
                A brief story about who I am.
            </p>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-delay2">
                I'm a <span className="text-blue-400 font-semibold">passionate developer</span> from India who enjoys
                designing, coding, and exploring new technologies every day. <br />
                I completed my{" "}
                <span className="text-indigo-400 font-semibold">B.Tech in Electrical Engineering</span> in 2023, but my
                curiosity and creativity naturally led me toward{" "}
                <span className="text-purple-400 font-semibold">software development</span>.
            </p>

            {/* Personal Interests */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl animate-fade-in-delay3">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">💡 Problem Solver</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        I love tackling logical challenges and turning complex problems into simple, efficient
                        solutions.
                    </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">🎨 Designer at Heart</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        I enjoy crafting clean and visually appealing user interfaces that balance usability and beauty.
                    </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-indigo-400 mb-2">🚀 Lifelong Learner</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Always excited to learn new technologies and frameworks to stay ahead in the fast-evolving web ecosystem.
                    </p>
                </div>
            </div>
        </div>
    );
}
