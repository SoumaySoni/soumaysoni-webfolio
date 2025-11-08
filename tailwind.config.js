/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-in": "fade-in 1s ease-out",
                "fade-in-delay": "fade-in 1s ease-out 0.3s both",
                "fade-in-delay2": "fade-in 1s ease-out 0.6s both",
                "fade-in-delay3": "fade-in 1s ease-out 0.9s both",
            },
        },
    },
    plugins: [],
};

