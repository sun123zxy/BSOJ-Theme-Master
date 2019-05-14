chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log('get request:');
    console.log(request, sender, sendResponse);
    if(request['type']=='getLocalStorage'){//发送bg的localStorage
        sendResponse(localStorage);
        console.log('Sent localStorage to:',sender);
    }
});