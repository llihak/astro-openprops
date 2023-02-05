const postcssPresetEnv = require('postcss-preset-env')
const postcssJitProp = require('postcss-jit-props');
const OpenProps = require('open-props');

const lib = process.env.npm_lifecycle_event

const inlineMediaQueries = lib === 'lib:media' || lib === 'lib:supports'
// todo: inline MQs for 'lib:all' when it's supported better

module.exports = {
    plugins: [
        postcssJitProp(OpenProps),
        require('autoprefixer'),
        require('postcss-nested'),
        postcssPresetEnv({
            stage: 0,
            autoprefixer: false,
            features: {
              'logical-properties-and-values': false, 
              'prefers-color-scheme-query': false, 
              'gap-properties': false,
              'custom-properties': false,
              'place-properties': false,
              'not-pseudo-class': false,
              'focus-visible-pseudo-class': false,
              'focus-within-pseudo-class': false,
              'color-functional-notation': false,
              'custom-media-queries': {preserve:inlineMediaQueries}
            }
        })
    ]
}