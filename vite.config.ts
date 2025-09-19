    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react-swc";
    import path from "path";

    // https://vitejs.dev/config/
    export default defineConfig(({ mode }) => ({
    plugins: [
        // Hapus/disable karena package tidak ada
        // viteSourceLocator({
        //   prefix: "mgx",
        // }),
        react(),
    ],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        },
    },
    }));
