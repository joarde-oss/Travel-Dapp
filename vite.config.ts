import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const isVercel = Boolean(process.env.VERCEL)
  return {
    base: isVercel ? '/' : '/Travel-Dapp/',
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
    ],
  }
})
