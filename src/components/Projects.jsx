import React from "react";

export default function Projects() {
    const projects = [
        {
            title: "Interactive Dashboard",
            tech: "React, Chart.js, Firebase",
            description:
                "A real-time analytics dashboard displaying user statistics and data visualizations. Includes dynamic filtering and responsive charts.",
            link: "#",
        },
        {
            title: "MERN Story Posting Site",
            tech: "MongoDB, Express, React, Node.js, JWT",
            description:
                "A full-stack story-sharing platform with authentication, CRUD operations, and a clean React UI built for storytelling.",
            link: "#",
        },
        {
            title: "Portfolio Website",
            tech: "React, TailwindCSS",
            description:
                "A personal portfolio showcasing my skills, projects, and experience with smooth transitions and modern design.",
            link: "#",
        },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 h-screen w-full text-white bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950">
            {/* Subtle overlay for consistent tone */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10"></div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)] animate-fade-in">
                Projects
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in-delay">
                Some of my favorite work.
            </p>

            {/* Project Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-in-delay2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    >
                        <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-all duration-300">
                            {project.title}
                        </h2>
                        <p className="text-blue-300 text-sm mb-3">{project.tech}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            {project.description}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <p className="mt-10 text-gray-400 text-sm animate-fade-in-delay3">
                More projects coming soon... stay tuned 🚀
            </p>
        </div>
    );
}
