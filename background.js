function setupContext(){
  chrome.contextMenus.create({
     id: "readSelectText",
      title: "Read Select Text",
      contexts: ["selection"]

  }, () =>{
    if(chrome.runtime.lastError){
      console.log(chrome.runtime.lastError)
    } 
  });
}

chrome.runtime.onInstalled.addListener(() =>{
  setupContext();
})

chrome.contextMenus.onClicked.addListener((info, tab) =>{
  
  if(info.menuItemId == "readSelectText"){
    const selectedText = info.selectionText;
    
    if(selectedText){
      chrome.tts.stop();

      chrome.tts.speak(selectedText,{});
    }
    
  }
}, () =>{
  if(chrome.runtime.lastError){
    console.log(chrome.runtime.lastError);
  }
});

