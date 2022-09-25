// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  test: {
    environment: "happy-dom",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/queue.ts"),
      name: "Queue",
      // the proper extensions will be added
      fileName: "queue",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
      },
    },
  },
  plugins: [dts()],
});
