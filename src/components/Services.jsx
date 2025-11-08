import React from "react";

export default function Services() {
    const services = [
        {
            title: "Web Development",
            icon: "💻",
            description:
                "Building responsive, modern, and high-performance websites using React.js, Next.js, and Node.js with clean UI and smooth functionality.",
        },
        {
            title: "UI / UX Design",
            icon: "🎨",
            description:
                "Creating intuitive user interfaces and seamless user experiences that combine aesthetic beauty with practical usability.",
        },
        {
            title: "Backend Development",
            icon: "🧠",
            description:
                "Developing secure, scalable, and efficient APIs and server-side logic using Express.js and MongoDB to support complex applications.",
        },
        {
            title: "Freelance Projects",
            icon: "🚀",
            description:
                "Delivering complete end-to-end solutions to clients — from concept and design to development and deployment with professional standards.",
        },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 h-screen w-full text-white bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950 overflow-y-auto">
            {/* Overlay for consistency */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10"></div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)] animate-fade-in">
                Services
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in-delay">
                What I can do for you.
            </p>

            {/* Service Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl animate-fade-in-delay2">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"
                    >
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">
                            {service.title}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <p className="mt-10 text-gray-400 text-sm animate-fade-in-delay3">
                Every service I offer is built with care, precision, and creativity ✨
            </p>
        </div>
    );
}
