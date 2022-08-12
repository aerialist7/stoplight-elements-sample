import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import NodeModulesPolyfill from "@esbuild-plugins/node-modules-polyfill"
import NodeGlobalsPolyfill from "@esbuild-plugins/node-globals-polyfill"
import nodePolyfills from "rollup-plugin-polyfill-node"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    /* This option (https://vitejs.dev/guide/migration.html#using-esbuild-deps-optimization-at-build-time) changes the error to:
    *  Cannot convert undefined or null to object
    *     at Function.assign (<anonymous>)
    *     at node_modules/@jsdevtools/ono/esm/index.js
    */
    // disabled: false,
    esbuildOptions: {
      plugins: [
        NodeModulesPolyfill(),
        NodeGlobalsPolyfill({
          buffer: true,
          process: true,
        }),
      ],
    },
  },
  build: {
    emptyOutDir: true,
    /* This option (https://vitejs.dev/guide/migration.html#using-esbuild-deps-optimization-at-build-time) changes the error to:
    *  Cannot convert undefined or null to object
    *     at Function.assign (<anonymous>)
    *     at node_modules/@jsdevtools/ono/esm/index.js
    */
    // commonjsOptions: {include: []},
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
  },
  server: {
    open: "/login/",
  },
})
