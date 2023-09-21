import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        "default-blue": "#01588E",
        "default-black": "#17141F"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
    },
  },
  plugins: [],
}
export default config
