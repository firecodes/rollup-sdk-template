const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { terser } = require("rollup-plugin-terser");
const version = require("../package.json").version;
const banner = `/*!
 * SDK.client v${version}
 * (c) 2014-${new Date().getFullYear()} Guillermo Rauch
 */`;

module.exports = {
  input: "./build/esm/index.js",
  output: {
    file: "./dist/SDK.client.esm.min.js",
    format: "esm",
    sourcemap: true,
    plugins: [terser()],
    banner,
  },
  plugins: [
    nodeResolve({ browser: true, }),
    commonjs(),
  ],
};
