function test() {
}

function datebaseRequest(url, params) {
    var xmlRequest = new XMLHttpRequest();

    if (!params) {
        url += "?";
        for (var param of params) {
            url += param + "&";
        }
        url = url.slice(0, -1);
    }
    xmlRequest.open("GET",url);
    xmlRequest.send();

    xmlRequest.onreadystatechange = function() {
        if(xmlRequest.readyState === 4 && xmlRequest.status === 200) {
           console.log(xmlRequest.responseText);
           return xmlRequest.responseText;
        }
    }
}