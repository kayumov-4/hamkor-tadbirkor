/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./src/**/*.{js,vue,ts}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#e0f7f6",
          100: "#b3ece8",
          200: "#80dfd9",
          300: "#4dd2ca",
          400: "#26c8be",
          500: "#03C3B5",
          600: "#02ada2",
          700: "#02968d",
          800: "#017e78",
          900: "#005e58",
          950: "#003f3b",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        marqueeHorizontal: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-slow": "marquee 25s linear infinite",
        "marquee-medium": "marquee 20s linear infinite",
        "marquee-fast": "marquee 10s linear infinite",
        "marquee-horizontal-medium": "marqueeHorizontal 20s linear infinite",
      },
    },
  },
  plugins: [],
};
