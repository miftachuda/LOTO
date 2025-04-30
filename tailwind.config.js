/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          700: "#1a2234",
          800: "#151b2b",
          900: "#0f1420",
        },
      },
      backgroundImage: {
        "multi-spot":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      animation: {
        "gradient-x": "gradientX 15s ease infinite",
      },
      keyframes: {
        gradientX: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        400: "400% 400%",
      },
    },
  },
  plugins: [],
};
