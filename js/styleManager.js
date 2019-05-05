console.log("successful loaded styleManager.js");
var root=document.querySelector(':root');

//TODO：background-contentJs通信
/*
chrome.storage.local.get(['bgImage'],function(result){
    root.setAttribute("style","--bgImage: " + result.key);
});*/
//root.setAttribute("style","--bgImage: "+chrome.storage.local['bgImage']);//TODO
//chrome.storage.local.get(['bgImage'],function(result){console.log(result)});