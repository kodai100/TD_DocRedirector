
var url = location.href;

if (url.match(/wiki088/)) {
    var newurl = url.replace("088", "099");

    chrome.extension.sendRequest({request:"redirect", destination: newurl});
}