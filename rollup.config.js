import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import image from 'rollup-plugin-image'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

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
    postcss(),
    image(),
    babel()
  ]
}
