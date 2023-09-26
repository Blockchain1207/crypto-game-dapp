/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '1/3': '1 / 3',
        // 2: '2 / 1',
        // 4: '4 / 1',
        2: '2.21',
        4: '4.64',
      },
      colors: {
        other: {
          1: "rgba(190, 1, 0, 0.50)",
          2: "rgba(225, 113, 29, 0.50)",
          3: "rgba(243, 179, 68, 0.50)",
        },
        dardModeContent: {
          3: "#bfc6cc",
        },
        main: {
          1: "#E7100E",
          2: "#BE0100",
          4: "#307FE2",
          8: "#E1711D",
          9: "#09A854",
          10: "#F3B344",
        },
        dark: {
          400: "#121627",
          DEFAULT: "#06071A",
        },
        grey: {
          10: "#F6F6F6",
          20: "#d9dee2",
          60: "#919CA2",
          70: "#5E6B74",
          80: "#434D56",
          90: "#232C35",
          100: "#1A2129",
        },
        background: {
          1: "#06071A",
          2: "#121628",
          3: "#1E2238",
        },
      },
      boxShadow: {
        activeLink: "0px -3px 26px 0px #BE0100",
      },
      backgroundImage: {
        landingHeroDetails:
          "linear-gradient(180deg, rgba(133, 133, 133, 0.20) 0%, rgba(49, 49, 49, 0.20) 100%)",
        shadowRed: "linear-gradient(90deg, #A31012 0%, #F72A2E 100%)",
        advantageBox:
          "linear-gradient(180deg, rgba(190, 1, 0, 0.00) 0%, rgba(190, 1, 0, 0.20) 100%)",
      },
      gridTemplateColumns: {
        gamesGrid: "repeat( auto-fill, minmax(210px, 1fr) )",
        cardsGrid: "repeat( auto-fill, minmax(180px, 1fr) )",
        14: 'repeat(14, minmax(0, 1fr))',
      },
      dropShadow: {
        landingTitle: "4px 4px 0px #BE0100",
      },
    },
  },
  plugins: [],
};
