module.exports = {
    devServer: {
        proxy: 'https://lemeilleurcoin-yasser-faleh.cleverapps.io/',
    },
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' + process.env.CI_PROJECT_NAME + '/'
        : '/'
}