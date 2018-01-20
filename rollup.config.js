import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import postcssURL from 'postcss-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs'
  },
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [
        postcssURL({
          url: 'inline'
        })
      ]
      // modules: true,
      // extract: 'dist/styles.css'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    resolve(),
    url({
      limit: 999999999999
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
