chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://eldenring.wiki.fextralife.com/Interactive+Map' }, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content_script.js']
    });
  });
});
