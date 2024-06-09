import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        'md': '750px',
        lg: '1002px',
        xl: '1250px',
      }
    },
    extend: {
      borderRadius: {
        sm: '3px',
      },
      colors: {
        primary: '#ff545a',
      },
      spacing: {
        13: '52px',
        15: '60px',
        30: '120px',
        75: '300px',
      },
      boxShadow: {
        DEFAULT: '0 0px 5px rgba(71,71,71,.2)',
        sm: '0 0px 10px rgba(21,19,19,.1)',
        md: '0 10px 20px rgba(21,19,19,.2)',
        lg: '0 5px 20px rgba(21,19,19,.4)',
      }
    },
  },
  plugins: [],
};
export default config;
