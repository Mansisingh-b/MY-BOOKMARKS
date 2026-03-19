export default defineConfig({
  base: "/MY-BOOKMARKS/",   // ⭐ IMPORTANT LINE
  plugins: [react(), tailwindcss()],
  server: {
    port: 8080,
    strictPort: true,
  }
});
