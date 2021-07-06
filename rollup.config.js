/*
 * @Author: Miya
 * @Date: 2021-06-29 23:43:30
 * @LastEditTime: 2021-06-30 00:26:01
 * @LastEditors: Miya
 * @Description: rollup
 * @FilePath: \Mermaid-UI\rollup.config.js
 */
import { resolve } from 'path';
import vue from 'rollup-plugin-vue';
import { babel } from '@rollup/plugin-babel';
// import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import less from 'rollup-plugin-less';
import extensions from 'rollup-plugin-extensions';
import vueJSX from 'rollup-plugin-vue-jsx-compat';
import esbuild from 'rollup-plugin-esbuild';
module.exports = [
  {
    input: resolve(__dirname, './package/index.ts'),
    output: [
      {
        file: resolve(__dirname, './lib/main.js'),
        format: 'es',
      },
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx'],
      }),
      vueJSX({
        css: true
      }),
      less(),
      esbuild({
        tsxFactory: 'vueJsxCompat',
      }),
      postcss(),
      vue(),
      extensions({
        extensions: ['.ts', '.tsx'],
        resolveIndex: true,
      }),
    ],
  },
];
