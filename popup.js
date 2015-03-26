/**
 * Created by oshri barazani on 3/24/15.
 */
var gbk = chrome.extension.getBackgroundPage();
function torrentzClickHandler(e) {

    var text_search = document.getElementById("textSearch").value;
    var torretzUrl = "https://torrentz.eu/search?q=";
    var search = torretzUrl + text_search;
    chrome.tabs.create({url: search});
    gbk.console.log(text_search);

}
function torrentzEnterHandler(e){

    var key = e.keyCode ;
    if (key == 13)
        torrentzClickHandler(e);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('torrentz-click').addEventListener('click', torrentzClickHandler);
    document.getElementById('textSearch').addEventListener('keypress',torrentzEnterHandler);
})