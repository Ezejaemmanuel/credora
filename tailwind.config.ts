/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				spaceGrotesk: ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				neonGreen: '#00FF00',
				neonRed: '#FF3131',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'neon-green': '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 15px #00FF00',
				'neon-red': '0 0 5px #FF3131, 0 0 10px #FF3131, 0 0 15px #FF3131',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'text-reveal': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'glow-pulse': {
					'0%, 100%': { textShadow: '0 0 12px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.5)' },
					'50%': { textShadow: '0 0 25px rgba(0, 255, 0, 1), 0 0 40px rgba(0, 255, 0, 0.8)' }
				},
				'glow-pulse-red': {
					'0%, 100%': { textShadow: '0 0 12px rgba(255, 49, 49, 0.8), 0 0 20px rgba(255, 49, 49, 0.5)' },
					'50%': { textShadow: '0 0 25px rgba(255, 49, 49, 1), 0 0 40px rgba(255, 49, 49, 0.8)' }
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'border-pulse': {
					'0%, 100%': { borderColor: 'rgba(0, 255, 0, 0.5)' },
					'50%': { borderColor: 'rgba(0, 255, 0, 1)' }
				},
				'border-pulse-red': {
					'0%, 100%': { borderColor: 'rgba(255, 49, 49, 0.5)' },
					'50%': { borderColor: 'rgba(255, 49, 49, 1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'text-reveal': 'text-reveal 0.8s ease-out forwards',
				'fade-in': 'fade-in 1s ease-out forwards',
				'glow-pulse': 'glow-pulse 2s infinite',
				'glow-pulse-red': 'glow-pulse-red 2s infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'border-pulse': 'border-pulse 2s infinite',
				'border-pulse-red': 'border-pulse-red 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
