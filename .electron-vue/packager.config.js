const path = require('path');

/**
 * `electron-packager` options
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-packager.html
 */
module.exports = {
    mode: 'production',
    arch: 'x64',
    asar: false,
    dir: path.join(__dirname, '../'),
    icon: path.join(__dirname, '../icons/icon'),
    ignore: /(^\/(src|test|\.[a-z]+|README|yarn|static|dist\/web|path\.config\.js|icons|previews))|\.gitkeep/,
    out: path.join(__dirname, '../build'),
    overwrite: true,
    platform: process.env.BUILD_TARGET || 'darwin',
};
