
chrome.extension.onRequest.addListener(function(request, sender){
    if(request.request == "redirect"){
        chrome.tabs.update(sender.tab.id, {url : request.destination});
    }
    
});