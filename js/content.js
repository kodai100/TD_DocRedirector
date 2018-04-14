
var url = location.href;

console.log(url);

if (url.match(/wiki088/)) {
    var newurl = url.replace("088", "099");

    if(checkUrl(newurl)){
        chrome.extension.sendRequest({redirect: newurl});
    } else{
        console.log("page does not exist");
    }
}



function checkUrl(url) {
    var request = false;
    if (window.XMLHttpRequest) {
            request = new XMLHttpRequest;
    } else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHttp");
    }

    if (request) {
            request.open("GET", url);
            if (request.status == 200) { return true; }
    }

    return false;
}