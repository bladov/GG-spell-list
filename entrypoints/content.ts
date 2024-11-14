
// const watchPattern = new MatchPattern('*://*.youtube.com/watch*');
// const watchPattern = new MatchPattern('*');



function getDoc() {
  return document.querySelector('textarea[title="Text Chat Input"]')
}
export default defineContentScript({
  // matches: ['*://*.youtube.com/*'],
  matches: ["*://*/*"],
  main(ctx) {
    console.log('ctx test', ctx);
    console.log('document', document);
    mainWatch('0000')


    // ctx.addEventListener(window, 'wxt:locationchange', ({ newUrl }) => {
    //   if (watchPattern.includes(newUrl)) mainWatch(ctx);
    // });
  },
});

export function mainWatch(msg: string) {
  const test: any = getDoc()
  console.log('test', test);
  if (!test) return

  test.value = msg
}



// export default defineContentScript({
//   // matches: ["*://*/*"],
//   // matches: ['about:blank', '*://app.roll20.net/*'],
//   matches: ['about:blank', '*://app.roll20.net/*'],
//   main(ctx) {
//     alert('ctx content')
//     console.log('2, ctx', ctx);
//     console.log('2, ctx', document);

//   }
// });


// entrypoints/example-ui.content/index.ts


// import { createApp } from 'vue';
// import App from './popup/App.vue';

// export default defineContentScript({
//   // matches: ["*://app.roll20.net/*"],
//   matches: ["*"],

//   main(ctx) {
//     const ui = createIntegratedUi(ctx, {
//       position: 'inline',
//       anchor: 'body',
//       onMount: (container) => {
//         // Create the app and mount it to the UI container
//         const app = createApp(App);
//         app.mount(container);
//         console.log('document', document);
//         console.log('container', container);


//         return app;
//       },
//       onRemove: (app) => {
//         if (!app) return
//         // Unmount the app when the UI is removed
//         app.unmount();
//       },
//     });

//     // Call mount to add the UI to the DOM
//     ui.mount();
//     console.log('ui', ui);

//   },
// });