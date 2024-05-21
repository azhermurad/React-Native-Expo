/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: {
    relative: true,
    files:["./app/**/*.{js,jsx,ts,tsx}"]
  },
  presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: []
};
