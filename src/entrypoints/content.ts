export default defineContentScript({
  // matches: ['*://*.youtube.com/*'],
  // matches: ["*://app.roll20.net/*"],
  // matches: ['*://*.wxt.dev/*'],
  matches: ['*://*/*'],
  main(ctx) {
    console.log('here3 ctx', ctx)
  },
})
