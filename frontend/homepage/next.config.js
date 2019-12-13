const withSass = require('@zeit/next-sass')
const withTM = require('next-transpile-modules');
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withSass(withTM({
    transpileModules: ['react-bulma-components'],
    sassLoaderOptions: {
        includePaths: ["./src"]
    },
})))