import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            'three': 'three/webgpu'
        },
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
