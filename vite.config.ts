    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react-swc";
    import path from "path";

    // https://vitejs.dev/config/
    export default defineConfig(() => ({
    base: "/company-monascho/",  // <== nama repo kamu di GitHub
    plugins: [react()],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        },
    },
    }));
