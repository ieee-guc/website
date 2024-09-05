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
                    bg: '#f9fafb',
                    border: '#e2e8f0',
                    // 'sub-bg': '#e2e8f0',
                    'sub-bg': '#f3f4f6',
                    'nav-bg': '#ffffff',
                    'red': '#b91c1c',
                },
                dark: {
                    primary: '#0A4593',
                    secondary: '#009DDC',
                    accent: '#fcd34d',
                    text: '#EFF8E2',
                    bg: '#0f172a',
                    border: '#374151',
                    'sub-bg': '#1f2937',
                    // 'sub-bg': '#1e293b',
                    'nav-bg': '#020617',
                    'red': '#f87171',
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
