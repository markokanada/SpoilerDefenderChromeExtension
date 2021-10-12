chrome.action.onClicked.addListener(function() {
  //chrome.tabs.create({ url: 'https://techtabor.agondolkodasorome.hu' });
  chrome.scripting.executeScript({function(){
    alert("Test");
  }})
});
