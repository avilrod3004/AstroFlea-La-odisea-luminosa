import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        target: browserslistToEsbuild(),
    },
})