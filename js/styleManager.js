console.log("successful loaded styleManager.js");
var root=document.querySelector(':root');

function getLocalStorage(callBack){//找bg要localStorage
    chrome.runtime.sendMessage({type:'getLocalStorage'}, function(response) {
        callBack(response);
    });
}

getLocalStorage(function(storage){
    console.log('successfully get the storage:');
    console.log(storage);
    for(var idx in storage){
        root.style.setProperty('--'+idx,storage[idx]);
    }
    console.log("final style:");
    console.log(root.style);
});