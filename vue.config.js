module.exports = {
    devServer: {
        host: '0.0.0.0',
        "port": 8000,
        "open": true,
        // proxy: {
        //     '/api': {
        //         target: 'https://itunes.apple.com',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
    },

}