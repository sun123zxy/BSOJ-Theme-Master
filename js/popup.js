console.log("successful loaded popup.js")
var bgPage = chrome.extension.getBackgroundPage();
var confirm=document.getElementById("confirm");
var shell=document.getElementById("settings");
var settings=shell.childNodes;

//读取缓存并填入settings
for(var i=0;i<settings.length;i++){
  var now=settings[i];
   if(now.tagName == 'INPUT'){
    var id=now.getAttribute('id');
    now.value=bgPage.localStorage[id];
  }
}

confirm.onclick=function(){//settings存入缓存
    for(var i=0;i<settings.length;i++){
      var now=settings[i];
      if(now.tagName == 'INPUT'){
        var id=now.getAttribute('id');
        bgPage.localStorage[id]=now.value;
      }
    }
}