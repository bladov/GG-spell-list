

export default defineContentScript({
    // Set "registration" to runtime so this file isn't listed in manifest
    registration: "runtime",
    // URL patterns passed here are automatically added to "host_permissions"
    matches: ["*://*/*"],

    async main(ctx) {
        console.log("Content script executed!");
        const textarea = document.querySelector('textarea[title="Text Chat Input"]')
        // Optionally, return a value to the background
        return textarea;
    },
});