/**
 * Created by oshri barazani on 3/24/15.
 */



function onClickHandlerTorrentz(info, tab) {
    var torretzUrl = "https://torrentz.eu/search?q=";
    var search = torretzUrl + info.selectionText;
    chrome.tabs.create({url: search});
}

function onClickHandlerKickass(info, tab) {

    var kiackassUrl = "https://kickass.to/usearch/";
    var search = kiackassUrl + info.selectionText + "\\";
    chrome.tabs.create({url: search});
}


chrome.contextMenus.create({
    "title": "Torrent website",
    "id": "parent",
    contexts: ["selection"]});

chrome.contextMenus.create({
    "title": "Torrentz",
    "parentId": "parent",
    "id": "child1",
    contexts:["selection"],
    onclick: onClickHandlerTorrentz});

chrome.contextMenus.create({
    "title": "Kickass",
    "parentId": "parent",
    "id": "child2",
    contexts:["selection"],
    onclick: onClickHandlerKickass});
