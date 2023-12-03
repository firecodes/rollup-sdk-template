const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");
const { terser } = require("rollup-plugin-terser");
const commonjs = require("@rollup/plugin-commonjs");

const version = require("../package.json").version;
const banner = `/*!
 * SDK.client v${version}
 * (c) 2014-${new Date().getFullYear()} Guillermo Rauch
 */`;

module.exports = {
  input: "./build/esm/module.js",
  output: [{
    file: "./dist/SDK.client.js",
    format: "umd",
    name: "io",
    sourcemap: true,
    banner,
  }, {
    file: "./dist/SDK.client.min.js",
    format: "umd",
    name: "io",
    sourcemap: true,
    plugins: [terser()],
    banner,
  }],
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      presets: [["@babel/env"]],
      plugins: ["@babel/plugin-transform-object-assign"],
    }),
  ],
};
