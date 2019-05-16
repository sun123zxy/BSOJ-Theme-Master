console.log("successful loaded popup.js")
var bgPage = chrome.extension.getBackgroundPage();
var confirm=document.getElementById("confirm");
var shell=document.getElementById("settings");
var settings=shell;

function findINPUT(x,callBack){
  if(x.tagName=='INPUT'){
    callBack(x);
  }
  var kids=x.childNodes;
  for(var i=0;i<kids.length;i++){
    var to=kids[i];
    if(to.nodeType == 1){
      findINPUT(to,callBack);
    }
  }
}
function refresh(){//读取缓存并填入settings中的INPUT
  findINPUT(settings,function(x){
    var id=x.getAttribute('id');
    x.value=bgPage.localStorage[id];
  });
}

refresh();
confirm.onclick=function(){
  findINPUT(settings,function(x){//遍历settings中的所有INPUT，存入缓存
    var id=x.getAttribute('id');
    bgPage.localStorage[id]=x.value;
    console.log(id,x.value);
  });
};