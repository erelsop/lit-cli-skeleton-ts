import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

export default {
  input: './build/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    replace({
      'Reflect.decorate': 'undefined',
      'preventAssignment': true
    }),
    resolve(),
    terser()
  ]
};