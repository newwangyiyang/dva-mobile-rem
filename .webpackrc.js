const pxtorem = require('postcss-pxtorem');

export default {
  entry: 'src/index.js',
  theme: "./theme.config.js",
  browserslist: [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 9'
  ],
  publicPath: "/",
  outputPath: "./dist", //打包输出路径
  hash: true,
  disableDynamicImport: false,
  html: {
    template: './src/index.ejs'
  }, //用于将hash文件替换到ejs模板中
  env: {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        ['import', {
          'libraryName': 'antd-mobile',
          'libraryDirectory': 'lib',
          'style': true
        }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "@babel/transform-runtime",
        ['import', {
          'libraryName': 'antd-mobile',
          'libraryDirectory': 'lib',
          'style': true
        }]
      ]
    }
  },
  extraPostCSSPlugins: [ // pxtorem
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ]
};
