console.log("successful loaded popup.js")
var bgPage = chrome.extension.getBackgroundPage();
var shell=document.getElementById("settings");
var settings=shell;
var confirm=document.getElementById("confirm");
var reset=document.getElementById("reset");
var ip=document.getElementById("import");
var ep=document.getElementById("export");
var jsonInput=document.getElementById("jsonInput");

function findINPUT(x,callBack){//找到x中所有INPUT（遍历）
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
    if(x.value=='undefined') x.value='';//防出现undefined后confirm导致css默认值失效
  });
}
//-----Onclicks-----
ip.onclick=function(){/*导入JSON*/
  var json = JSON.parse(jsonInput.value);
  jsonInput.value="";
  for(idx in json){
    bgPage.localStorage[idx]=json[idx];
  }
  refresh();
  console.log("successfully imported!");
};
ep.onclick=function(){/*导出JSON*/
  jsonInput.value=JSON.stringify(bgPage.localStorage);
  console.log("successfully exported!");
};
confirm.onclick=function(){
  findINPUT(settings,function(x){//将settings中的所有INPUT值存入缓存
    var id=x.getAttribute('id');
    bgPage.localStorage[id]=x.value;
  });
  console.log("successfully saved!");
};
reset.onclick=function(){
  bgPage.localStorage.clear();
  refresh();
  console.log("successfully reset!");
}
//-----Begin-----
refresh();