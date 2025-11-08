import React from "react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20">
            {/* Greeting */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)] animate-fade-in">
                Hi, I'm <span className="text-white">Soumay Soni 👋</span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in-delay">
                Junior Software Developer <span className="mx-2 text-indigo-400">|</span> D-Vertex Info System
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed animate-fade-in-delay2">
                I specialize in building{" "}
                <span className="text-blue-400 font-semibold">modern web applications</span> using
                <span className="text-orange-400 font-semibold"> Reactjs</span>,{" "}
                <span className="text-pink-400 font-semibold"> Nextjs</span>,{" "}
                <span className="text-teal-400 font-semibold">Node.js</span>, and{" "}
                <span className="text-red-400 font-semibold">MongoDB</span>. <br />
                I love creating elegant, responsive, and performance-driven UI experiences.
            </p>

            {/* Call to Action */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                    href="#projects"
                    className="px-8 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:scale-105 hover:shadow-indigo-600/30 transition-transform duration-300"
                >
                    View My Work
                </a>
                <a
                    href="#contact"
                    className="px-8 py-3 text-lg font-semibold rounded-xl border border-blue-400/70 text-white hover:bg-blue-600/10 hover:text-blue-200 transition-all duration-300"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}
