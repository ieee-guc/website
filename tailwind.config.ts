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
                    accent: '#ea580c',
                    text: '#021526',
                    bg: '#f8fafc',
                    'sub-bg': '#e2e8f0',
                },
                dark: {
                    primary: '#0A4593',
                    secondary: '#009DDC',
                    accent: '#fcd34d',
                    text: '#EFF8E2',
                    bg: '#0f172a',
                    'sub-bg': '#1e293b',
                },
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
