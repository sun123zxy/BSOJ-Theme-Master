console.log("successful loaded styleManager.js");
var root=document.querySelector(':root');

function getLocalStorage(callBack){//找bg要localStorage
    chrome.runtime.sendMessage({type:'getLocalStorage'}, function(response) {
        callBack(response);
    });
}
function refreshStyle(){
    console.log('refreshing styles...');
    getLocalStorage(function(storage){
        console.log('successfully get the storage:');
        console.log(storage);
        for(var idx in storage){
            if(idx.substring(0,6)=='style_'){//判断是否为要用的缓存
                var name='--'+idx.substring(6);
                root.style.setProperty(name,storage[idx]);
            }
        }
        console.log("final style:");
        console.log(root.style);
    });
}

refreshStyle();