const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/styles/variables.scss')],
    });
}

module.exports = {
  runtimeCompiler: true,

  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('scss').oneOf(type))
    );
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src'),
      },
    },
  },
};
