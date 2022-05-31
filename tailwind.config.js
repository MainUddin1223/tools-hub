module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0EA5E9",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#e2e8f0",
        },
      },
      "cupcake",
      
    ],
  },
  plugins: [require("daisyui")],
}