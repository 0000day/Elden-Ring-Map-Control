document.getElementById('openMap').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://eldenring.wiki.fextralife.com/Interactive+Map' });
});
