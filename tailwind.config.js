/** @type {import('tailwindcss').Config} */

const { sizeList } = require("./src/utils/size-list");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/components/**/*.js"],
  theme: {
    extend: {
      fontSize: { ...sizeList(51, 2) },
      spacing: { ...sizeList(101, 2) },
      screens: {
        desktop: "576px",
      },
      colors: {
        metabeat: {
          blue: "#0000ff",
          black: "#111111",
          gray: "#FCFCFC",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [
    plugin(({ addComponents }) =>
      addComponents([
        {
          ".bg-blur": {
            boxShadow: "0 0 50px rgba(0,0,0,0.1)",
            backdropFilter: "blur(54px)",
          },
        },
      ]),
    ),
  ],
};
