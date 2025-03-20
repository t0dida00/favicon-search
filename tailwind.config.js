/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            animation: {
                pulse: "pulse var(--duration) ease-out infinite",
            },
            keyframes: {
                pulse: {
                    "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
                    "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
                },
            },
        },
    },
};