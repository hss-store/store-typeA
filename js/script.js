function test() {
    var retext = datebaseRequest("https://script.google.com/macros/s/AKfycbwUdfIf495kezAIQxtht5WMjjIAqOPe1YAC2x6nE0me_t4eRz27HCv-x8Hc10PZvppL/exec",["type=auth","userName=unko","passHash=aiueo700"]);
    var start = retext.indexOf("A HREF") + 7;
    var end = retext.indexOf(">here<") - 2;
    retext = retext.substring(start,end);
    console.log(datebaseRequest(retext));
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
            var retext = xmlRequest.responseText;
            console.log(retext);
            return retext;
        }
    }
}