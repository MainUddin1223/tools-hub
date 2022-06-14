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
          secondary: "#00f5d4",
          accent: "#304e89",
          neutral: "#3d4451",
          "base-100": "#e2e8f0",
        },
      },
      "cupcake",
      
    ],
  },
  plugins: [require("daisyui")],
}