module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './' // prod
    : '/', // dev
  assetsDir: './'
}
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? './' // prod
//     : '/', // dev
//   devServer: {
//     proxy: 'https://pylearn.info'
//     // https: true
//   }
// }