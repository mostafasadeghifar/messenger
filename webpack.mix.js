const mix = require('laravel-mix');
// const BrowserSyncPluginb = require('browser-sync-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

require('dotenv').config();
// mix.webpackConfig({
//     plugins: [
//         new BrowserSyncPlugin({
//             files: [
//                 '**/*.css'
//             ]
//         }, {reload:false}),
//     ]
// })
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}
