module.exports = (options = {}) => {
    return {
        entry: './index.js',
        html: true,
        transformModules: ['string-width', 'strip-ansi', 'ansi-regex', 'is-fullwidth-code-point'],
    }
}