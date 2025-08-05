const { resolve } = require('path')
export default {
    plugins: [],
    server: {
        cors
            : {
            // the origin you will be accessing via browser
            origin
                : 'https://cfitech.be/koekelplay',
        },
        open: 'index.html',
        port: 3116,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            }
        }
    }
}