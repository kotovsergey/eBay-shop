var xhttp = new XMLHttpRequest();
var  url = "http://svcs.ebay.com/services/search/FindingService/v1?" +
    "OPERATION-NAME=findItemsIneBayStores&SERVICE-VERSION=1.12.0&" +
    "SECURITY-APPNAME=SergeyKo-GeniusAu-PRD-f45f30466-77fdb9ca&" +
    "RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&storeName=Genius+Automote&" +
    "outputSelector=StoreInfo&paginationInput.entriesPerPage=100";
function callOtherDomain() {
    if (xhttp) {
        console.log(xhttp);
        xhttp.open("GET", url, true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            document.getElementById('demo').innerHTML = xhttp.response;
        }
    }
}

callOtherDomain();
