import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                light: {
                    primary: '#0A4593',
                    secondary: '#6EACDA',
                    accent: '#FFCA00',
                    text: '#021526',
                    bg: '#FFF8F3',
                    'sub-bg': '#FFEBDD',
                },
                dark: {
                    primary: '#0A4593',
                    secondary: '#009DDC',
                    accent: '#E4572E',
                    text: '#EFF8E2',
                    bg: '#070F2B',
                    'sub-bg': '#0D183C',
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['dark', 'high-contrast'],
            textColor: ['dark', 'high-contrast'],
            borderColor: ['dark', 'high-contrast'],
        },
    },
    plugins: [],
};
export default config;
