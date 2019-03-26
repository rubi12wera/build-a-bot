module.exports ={
    devServer: {
        proxy:{
            '/api': {
                //webpack dev server: webpack config bc Vue is using webpack dev config
                //re-start server when modifying proxy
                target: 'http://localhost:8081',
                changeOrigin: true,
            }
        }
    }
}