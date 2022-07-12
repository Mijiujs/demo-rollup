import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve'; // 辅助识别node_module下的包
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser'; // 压缩

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs', // 五种输出格式：amd、es6、iife、umd、cjs
      // name: 'A', // 当format为iife和umd时必须提供，将作为全局变量挂在window下
      // sourcemap: true, // 生成soucemap文件方便调试
    },
    {
      file: 'lib/index.min.js',
      format: 'cjs',
      plugins: [terser()]
    }
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // 只编译我们的源代码
    })
  ],
  external: [], // 指出哪些模块不会打包，视为外部模块
  global: {
    // 'jquery': '$', 全局变量$是jquery
  },
}