import type { Config } from "tailwindcss"

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/*.{js,ts,jsx,tsx,mdx}'
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        "default-blue": "#01588E",
        "default-black": "#17141F"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "default": "url('../../public/assets/images/background-index.jpg')",
        "services": "url('../../public/assets/images/background-services.jpg')",
        "about": "url('../../public/assets/images/background-about.jpg')",
        "contact": "url('../../public/assets/images/background-contact.jpg')",
        "account": "url('../../public/assets/images/background-account.jpg')"
      },
      textColor: {
        "default-blue": "#01588E",
        "default-black": "#17141F"
      },
      height: {
        "default": "calc(100vh - 80px)"
      },
      margin: {
        "header": "120px",
        "mobile-menu": "100vw"
      },
      borderColor: {
        "default-blue": "#01588E"
      },
      rotate: {
        "360": "360deg"
      },
      transitionDuration: {
        "slow": "0.5s"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config