import { ViteAliases } from 'vite-aliases'

export default {
    root: 'public',
    plugins: [
        ViteAliases({
            prefix: '@'
        })
    ],
}
