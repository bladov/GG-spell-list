export default defineContentScript({
    // matches: ['*://*.youtube.com/*'],
    // matches: ["*://app.roll20.net/*"],
    matches: ["*://*/*"],
    main(ctx) {
        const textarea: any = document.querySelector('textarea[title="Text Chat Input"]')
        
        return textarea
    },
});