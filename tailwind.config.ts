import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#37F040",
        "primary-hover": "#10D119",

        //Style Guide
        "white-neutral-n-900": "#303030",
        "white-neutral-n-800": "#474747",
        "white-neutral-n-700": "#5c5c5c",
        "white-neutral-n-600": "#707070",
        "white-neutral-n-500": "#858585",
        "white-neutral-n-400": "#999999",
        "white-neutral-n-300": "#adadad",
        "white-neutral-n-200": "#c2c2c2",
        "white-neutral-n-100": "#d6d6d6",
        "white-neutral-n-50": "#ebebeb",
        "white-neutral-n-25": "#f5f5f5",

        "base-shade-00-dp": "#110b14",
        "base-shade-01-dp": "#1b161e",
        "base-shade-02-dp": "#201b23",
        "base-shade-03-dp": "#221d25",
        "base-shade-04-dp": "#252027",
        "base-shade-06-dp": "#29252c",
        "base-shade-08-dp": "#2c282f",
        "base-shade-12-dp": "#312d33",
        "base-shade-16-dp": "#332f35",
        "base-shade-24-dp": "#363138",

        "green-shade-gr-1000": "#075f0c",
        "green-shade-gr-900": "#0a8510",
        "green-shade-gr-800": "#0dab15",
        "green-shade-gr-700": "#10d119",
        "green-shade-gr-600": "#1bee26",
        "green-shade-gr-500": "#37f040",
        "green-shade-gr-400": "#4ae052",
        "green-shade-gr-300": "#8df792",
        "green-shade-gr-200": "#b3fab6",
        "green-shade-gr-100": "#d9fdda",
        "green-shade-gr-50": "#ecfeec",

        "accent-critical-r-900": "#2a1215",
        "accent-critical-r-800": "#431418",
        "accent-critical-r-700": "#791a1f",
        "accent-critical-r-600": "#a61d24",
        "accent-critical-r-500": "#d32029",
        "accent-critical-r-400": "#e84749",
        "accent-critical-r-300": "#f37370",
        "accent-critical-r-200": "#f89f9a",
        "accent-critical-r-100": "#fac8c3",
        "accent-critical-r-50": "#fff2f1",
      },
      fontSize: {
        // Style Guide
        headline: ["20px", "28px"],
        "headline-42": ["42px", "50px"],
        "body-16": ["16px", "24px"],
        "body-14": ["14px", "22px"],
        "body-13": ["13px", "21px"],
        "body-12": ["12px", "20px"],
        button: ["14px", "22px"],
      },
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        default: ["Inter"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
