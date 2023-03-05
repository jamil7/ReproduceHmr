import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                bundle: 'fable/App.js',
            }
        }
    }
})