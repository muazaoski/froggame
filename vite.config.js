import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        dedupe: ['three', 'three-stdlib']
    },
    server: {
        proxy: {
            '/socket.io': {
                target: 'http://localhost:3000',
                ws: true
            }
        }
    }
});
