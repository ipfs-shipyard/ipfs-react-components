import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import postcssURL from 'postcss-url'

export default {
  entry: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    peerDepsExternal(),
    commonjs({
      include: 'node_modules/**'
    }),
    resolve(),
    postcss({
      plugins: [
        postcssURL({
          url: 'inline'
        })
      ]
    }),
    url({
      limit: 999999999999
    }),
    babel()
  ]
}
