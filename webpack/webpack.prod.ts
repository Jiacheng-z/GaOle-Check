import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from "terser-webpack-plugin";
import { mergeWithRules } from 'webpack-merge';

import * as constants from './constants';
import generateConfig from './webpack.config';

const baseConfig = generateConfig(constants);

const optimizationOverride = {
  optimization: {
    minimize: true,
    minimizer: [
      // Apply option overrides to Webpack v5's native TerserPlugin
      () => ({
        extractComments: true,
      }),
      new TerserPlugin({
        extractComments: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

const cssMinifyConfigOverride = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              // TODO: Migrate to url-loader
              url: false,
            },
          },
        ],
      },
    ],
  },
};

// @ts-ignore
export default mergeWithRules({
  optimization: 'merge',
  module: {
    rules: {
      test: 'match',
      use: 'replace',
    },
  },
  cache: 'replace',
})(baseConfig, {
  mode: 'production',
  cache: {
    type: 'filesystem',
    name: 'buff',
  },
  ...optimizationOverride,
  ...cssMinifyConfigOverride,
});
