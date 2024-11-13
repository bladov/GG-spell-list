export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error))

  const roll20Origin = 'roll20';
  const devOrigin = 'about:blank';

  chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
    if (!tab.url) return;
    const url = new URL(tab.url);
    alert(`url - ${url}`)
    // Enables the side panel on google.com
    if (url.origin.includes(roll20Origin) || url.origin.includes(devOrigin)) {
      await chrome.sidePanel.setOptions({
        tabId,
        path: 'sidepanel.html',
        enabled: true
      });
    } else {
      // Disables the side panel on all other sites
      await chrome.sidePanel.setOptions({
        tabId,
        enabled: false
      });
    }
  });
});
