document.getElementById("confirm").onclick=function(){
    var shell=document.getElementById("settings");
    console.log(shell);
    var sets=shell.childNodes;
    for(var i=0;i<sets.length;i++){
      var id=sets[i].getAttribute("id");
      localStorage[id]=sets[i].value;
    }
}