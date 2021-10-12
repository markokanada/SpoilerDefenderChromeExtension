chrome.action.onClicked.addListener(function() {
  //chrome.tabs.create({ url: 'https://techtabor.agondolkodasorome.hu' });
  //const tabId = getTabId();
  chrome.scripting.executeScript(
    {
      target: {tabId: tabId},
      files: ['content-script.js'],
    });
});
