import React from "react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Aarav Mehta",
            role: "Startup Founder",
            feedback:
                "Soumay is an exceptional developer who delivered a clean, efficient, and well-structured website for our startup. His attention to detail and commitment to quality are top-notch.",
            image: "https://i.pravatar.cc/100?img=12",
        },
        {
            name: "Priya Sharma",
            role: "Freelance Designer",
            feedback:
                "It was a pleasure working with Soumay. His React expertise and UI sense helped turn my design ideas into a seamless, interactive experience. Highly recommended!",
            image: "https://i.pravatar.cc/100?img=45",
        },
        {
            name: "Rahul Verma",
            role: "Tech Enthusiast",
            feedback:
                "I collaborated with Soumay on a MERN project and was impressed by his clean code and professional workflow. He’s reliable, communicative, and always eager to learn.",
            image: "https://i.pravatar.cc/100?img=33",
        },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 h-screen w-full text-white bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950 overflow-y-auto">
            {/* Overlay for visual balance */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10"></div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)] animate-fade-in">
                Testimonials
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in-delay">
                What people say about me.
            </p>

            {/* Testimonials Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-in-delay2">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"
                    >
                        {/* Profile Image */}
                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-500/50 group-hover:border-blue-400 transition-all duration-300"
                        />

                        {/* Feedback */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                            “{t.feedback}”
                        </p>

                        {/* Name & Role */}
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-all duration-300">
                            {t.name}
                        </h3>
                        <p className="text-blue-300 text-sm">{t.role}</p>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <p className="mt-10 text-gray-400 text-sm animate-fade-in-delay3">
                Your words inspire me to grow and create even better projects 🌟
            </p>
        </div>
    );
}
