/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
      backgroundImage: {
        hero: "url('/hero.webp')",
        aboutHero: "url('/about-hero.webp')",
        main: "url('/Background.webp')",
        about: "url('/aboutpage-bg.webp')",
        services: "url('/servicespage-bg.webp')",
        contact: "url('/contactpage-bg.webp')",
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#FFC106",
          200: "#FBFBFB",
          300: "#FFC106",
          400: "#FF8200",
          500: "#FFD967",
        },
        text: {
          blue: "#1B2534",
          gray: "#4D4F52",
          "gray-100": "#5F5F5F",
          "gray-200": "#4D5053",
          "gray-300": "#E5E5E5",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};
