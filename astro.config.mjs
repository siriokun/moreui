// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
    devOptions: {
        // port: 3000,         // The port to run the dev server on.
        tailwindConfig: './tailwind.config.js', // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
    },
    // Comment out "renderers: []" to enable Astro's default component support.
    renderers: [],
});