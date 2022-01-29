module.exports = {
    devServer: {
        proxy: 'http://lemeilleurcoin-yasser-faleh.cleverapps.io/',
        //proxy: 'http://localhost:8080/',

    },
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' + process.env.CI_PROJECT_NAME + '/'
        : '/'
}