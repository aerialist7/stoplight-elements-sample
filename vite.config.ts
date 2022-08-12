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
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
  },
  server: {
    open: "/login/",
  },
})
