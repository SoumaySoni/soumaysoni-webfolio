import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        // Simulate a form submission (replace with actual API call later)
        setTimeout(() => {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        }, 1200);
    };

    return (
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 text-white">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)] animate-fade-in">
                Contact Me
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in-delay">
                Let's build something amazing together.
            </p>

            {/* Contact Form */}
            <form
                onSubmit={handleSubmit}
                className="mt-8 w-full max-w-md flex flex-col gap-5 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md animate-fade-in-delay2"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 resize-none"
                ></textarea>

                <button
                    type="submit"
                    className="w-full py-3 font-semibold text-lg rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                    Send Message
                </button>

                {status && (
                    <p className="text-blue-300 text-sm mt-2 animate-fade-in">{status}</p>
                )}
            </form>

            {/* Contact Details / Footer Info */}
            <div className="mt-10 text-sm text-gray-400 animate-fade-in-delay3">
                <p>
                    You can also reach me at{" "}
                    <a
                        href="mailto:soumaysoni.dev@gmail.com"
                        className="text-blue-400 hover:underline"
                    >
                        soumaysoni.dev@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
