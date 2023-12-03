const base = require("./rollup.config.umd.js");
const alias = require("@rollup/plugin-alias");

module.exports = {
  ...base,
  output: {
    ...base.output[1],
    file: "./dist/SDK.client.msgpack.min.js",
  },
  plugins: [
    alias({
      entries: [{
        find: "SDK.client-parser",
        replacement: "SDK.client-msgpack-parser",
      }],
    }),
    ...base.plugins,
  ],
};
