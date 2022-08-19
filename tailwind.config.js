module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          real: "#221638"
        },
      },
      "dark",
      "cupcake",
    ],
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FE4A55",
          secondary: "#EEE8DF",
          accent: "#212529",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}