/*  Project 01_11_02

    Author: Emmanuel Cortes Castaneda
    Date: 09.18.19  

    Filename: script.js
*/

"use strict";

/* global variables */
var httpRequest = false;
var entry = "^IXIC";

function getRequestObject () {
    /* try {
        httpRequest = new XMLHttpRequest();
    }
    catch (requestError) {
        return false;
    }
    alert(httpRequest);
    return httpRequest;
    */
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", stopSubmission, false);
        window.addEventListener("load", getQuote, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", stopSubmission);
        window.attachEvent("onload", getQuote);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", getRequestObject, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", getRequestObject);
}

function stopSubmission(evt) {
    alert("stopSubmission()");
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    getQuote();
}

var form = document.getElementsByTagName("form")[0];
if (form.addEventListener) {
    form.addEventListener("submit", stopSubmission, false);
    window.addEventListener("load", getRequestObject, false);
} else if (form.attachEvent) {
    form.attachEvent("onsubmit", stopSubmission);
    window.attachEvent("onload", getRequestObject);
}

function getQuote() {
    /* alert("getQuote()");
    if (document.getElementsByTagName("input")[0].value) {
        entry = document.getElementsByTagName("input")[0].value;
    }
    if (!httpRequest) {
        httpRequest = getRequestObject();
    } */
    httpRequest.abort();
    httpRequest.open("get", "StockCheck.php?t=" + entry, true);
    httpRequest.send(null);
}