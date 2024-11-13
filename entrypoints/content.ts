
// export default defineContentScript({
//   // matches: ["*://*/*"],
//   matches: ['about:blank'],
//   main(ctx) {
//     console.log('2, ctx', ctx);

//   }
// });
// entrypoints/example-ui.content/index.ts
import { createApp } from 'vue';
import App from './popup/App.vue';

export default defineContentScript({
  matches: ["*://app.roll20/*"],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'body',
      onMount: (container) => {
        // Create the app and mount it to the UI container
        const app = createApp(App);
        app.mount(container);
        console.log('document', document);
        console.log('container', container);


        return app;
      },
      onRemove: (app) => {
        if (!app) return
        // Unmount the app when the UI is removed
        app.unmount();
      },
    });

    // Call mount to add the UI to the DOM
    ui.mount();
    console.log('ui', ui);

  },
});