import React from "react";

export default function Experience() {
    const experiences = [
        {
            company: "Freelance Web Developer",
            period: "2024 — Present",
            description:
                "Building and deploying responsive websites and full-stack web applications for clients using React.js, Node.js, and MongoDB. Focused on clean UI and optimized performance.",
        },
        {
            company: "Personal Projects",
            period: "2023 — 2024",
            description:
                "Worked on multiple portfolio and demo applications showcasing React components, authentication, and dynamic UI animations. Gained deep experience in frontend state management and modern design.",
        },
        {
            company: "B.Tech in Electrical Engineering",
            period: "2019 — 2023",
            description:
                "Completed my engineering degree, where I developed strong problem-solving skills and logical thinking that I now apply to software development.",
        },
    ];

    return (
        <div className="relative flex flex-col items-center justify-start text-center px-6 md:px-12 lg:px-20 h-screen w-full text-white bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950 overflow-y-auto">
            {/* Overlay for consistency */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10"></div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)] animate-fade-in">
                Experience
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in-delay">
                Where I’ve learned and grown.
            </p>

            {/* Timeline */}
            <div className="relative mt-10 w-full max-w-3xl text-left animate-fade-in-delay2">
                <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-60"></div>

                <div className="flex flex-col gap-8 pl-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative group transition-all duration-300 hover:translate-x-1"
                        >
                            {/* Timeline dot */}
                            <span className="absolute -left-[23px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-300"></span>

                            {/* Content */}
                            <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                {exp.company}
                            </h2>
                            <p className="text-blue-300 text-sm md:text-base mb-2">{exp.period}</p>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Note */}
            <p className="mt-10 text-gray-400 text-sm animate-fade-in-delay3">
                Every experience has shaped my growth as a developer 🚀
            </p>
        </div>
    );
}
