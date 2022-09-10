import { mergeWithRules } from 'webpack-merge';

import { checkChunks, checkHtmlChunksMap, checkModules } from './constants';
import generateConfig from './webpack.config';

// Add timerbar_test.html
const cactbotModulesOverride = {
  ...checkModules,
};

const cactbotHtmlChunksMapOverride = {
  ...checkHtmlChunksMap,
};

const baseConfig = generateConfig({
  checkModules: cactbotModulesOverride,
  checkChunks: checkChunks,
  checkHtmlChunksMap: cactbotHtmlChunksMapOverride,
});

const tsConfigOverride = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            declaration: true,
            declarationMap: true,
          },
        },
      },
    ],
  },
};

export default mergeWithRules({
  module: {
    rules: {
      test: 'match',
      options: 'replace',
    },
  },
})(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  ...tsConfigOverride,
});
