// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   corePlugins: {
//     preflight: false,
//   },
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       display: ["group-hover"],
//       keyframes: {
//         blogBoxUp: {
//           from: {
//             opacity: 0,
//             // transform: 'translate3d(0,100%,0)',
//           },
//           to: {
//             opacity: 1,
//             // transform: 'none',
//           },
//         },
//         fadeOpacityCome: {
//           from: { opacity: 0 },
//           to: { opacity: 1 },
//         },
//         fadeUpSlowCome: {
//           from: {
//             transform: "translateY(20px)",
//             opacity: 0,
//           },
//           to: {
//             transform: "translateY(0)",
//             opacity: 1,
//           },
//         },
//         mouldUpCome: {
//           from: {
//             transform: "translateY(-20px) perspective(600px) rotateX(20deg)",
//           },
//           to: {
//             transform: "translateY(0) perspective(600px) rotateX(0)",
//           },
//         },
//         keyframes: {
//           shine: {
//             "100%": { left: "125%" },
//           },
//         },
//       },
//       animation: {
//         shine: "shine 1s",
//         opacityAnimation: "fadeOpacityCome 1s ease-in-out",
//         mouldUpAnimation: "mouldUpCome 1s ease-in-out",
//         fadeUpAnimation: "fadeUpSlowCome 1s ease-in-out",
//         blogUpAnimation: "blogBoxUp 1s ease-in out",
//       },
//       fontFamily: {
//         inter: ["Inter", " sans-serif"],
//         raleway: ["Raleway", " sans-serif"],
//         robo: ["Roboto", " sans-serif"],
//         poppins: ["Poppins", " sans-serif"],
//       },
//       colors: {
//         "theme-primary": {
//           lighter: "#666666",
//           light: "#b6b6b6",
//           main: "#222222",
//           dark: "#E5E4E2",
//           darker: "#36454F",
//           contrastText: "#fff",
//         },
//         "theme-secondary": "#666666",
//         "light-grey": "#b6b6b6",
//         "dark-grey": "#222222",
//         "hover-text": "#f96666",
//         "opacity-gray": "#c8c8c8",
//         "mute-gray": "#e5e5e5",
//       },
//       fontSize: {
//         "custom-44": "44px",
//         "custom-15": "15px",
//         "custom-13": "13px",
//       },
//       fontWeight: {
//         "custom-500": "500",
//         "semi-medium": "550",
//       },
//       boxShadow: {
//         "shadow-primary": "0 1px 8px rgba(0,0,0,.1)",
//         "shadow-md": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//         "shadow-harco":
//           "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
//         "shadow-inset": "linear-gradient(180deg,transparent 10%,#000 90.45%)",
//         "shadow-light": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
//         "shadow-medium": "0 1px 8px rgba(0,0,0,.1)",
//         "shadow-detail": " rgba(0, 0, 0, 0.24) 0px 3px 8px",
//       },
//       borderWidth: {
//         DEFAULT: "1px",
//         0: "0",
//         2: "2px",
//         3: "3px",
//         4: "4px",
//       },
//       width: {
//         "w-main": "93%",
//         "mobile-w": "96%",
//       },
//       height: {
//         "custom-302": "302px",
//       },
//       borderRadius: {
//         "4xl": "30px",
//         "custom-14": "14px",
//         "5xl": "36px",
//         "6xl": "40px",
//         "7xl": "44px",
//         "8xl": "50px",
//         "custom-90": "0px 0px 90px 90px",
//       },
//       minHeight: {
//         "address-min": "180px",
//       },
//       maxHeight: {
//         "address-max": "180px",
//       },
//       screens: {
//         "custom-max-screen": "2800px",
//       },
//       gridTemplateRows: {
//         // Simple 8 row grid
//         8: "repeat(8, minmax(0, 1fr))",

//         // Complex site-specific row configuration
//         layout: "200px minmax(900px, 1fr) 100px",
//       },
//       backgroundImage: {
//         "my-account-cover":
//           "linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.7))",
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    // Or if using `src` directory:
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      keyframes: {
        blogBoxUp: {
          from: {
            opacity: 0,
            // transform: 'translate3d(0,100%,0)',
          },
          to: {
            opacity: 1,
            // transform: 'none',
          },
        },
        fadeOpacityCome: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeUpSlowCome: {
          from: {
            transform: "translateY(20px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        mouldUpCome: {
          from: {
            transform: "translateY(-20px) perspective(600px) rotateX(20deg)",
          },
          to: {
            transform: "translateY(0) perspective(600px) rotateX(0)",
          },
        },
        keyframes: {
          shine: {
            "100%": { left: "125%" },
          },
        },
      },
      animation: {
        shine: "shine 1s",
        opacityAnimation: "fadeOpacityCome 1s ease-in-out",
        mouldUpAnimation: "mouldUpCome 1s ease-in-out",
        fadeUpAnimation: "fadeUpSlowCome 1s ease-in-out",
        blogUpAnimation: "blogBoxUp 1s ease-in out",
      },
      fontFamily: {
        sans: [
          "LocalFont",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Oxygen-Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "sans-serif",
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      colors: {
        "theme-primary": {
          lighter: "#666666",
          light: "#b6b6b6",
          main: "#222222",
          dark: "#E5E4E2",
          darker: "#36454F",
          contrastText: "#fff",
        },
        "theme-secondary": "#666666",
        "light-grey": "#b6b6b6",
        "dark-grey": "#222222",
        "hover-text": "#f96666",
        "opacity-gray": "#c8c8c8",
        "mute-gray": "#e5e5e5",
      },
      fontSize: {
        "custom-44": "44px",
        "custom-15": "15px",
        "custom-13": "13px",
      },
      fontWeight: {
        "custom-500": "500",
        "semi-medium": "550",
      },
      boxShadow: {
        "shadow-primary": "0 1px 8px rgba(0,0,0,.1)",
        "shadow-md": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        "shadow-harco":
          "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        "shadow-inset": "linear-gradient(180deg,transparent 10%,#000 90.45%)",
        "shadow-light": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "shadow-medium": "0 1px 8px rgba(0,0,0,.1)",
        "shadow-detail": " rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
      },
      width: {
        "w-main": "93%",
        "mobile-w": "96%",
      },
      height: {
        "custom-302": "302px",
      },
      borderRadius: {
        "4xl": "30px",
        "custom-14": "14px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "44px",
        "8xl": "50px",
        "custom-90": "0px 0px 90px 90px",
      },
      minHeight: {
        "address-min": "180px",
      },
      maxHeight: {
        "address-max": "180px",
      },
      screens: {
        "custom-max-screen": "2800px",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
      backgroundImage: {
        "my-account-cover":
          "linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.7))",
      },
    },
  },
  plugins: [],
};
