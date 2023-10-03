// ==UserScript==
// @name         Wikipedia full width
// @version      1.1
// @description  Makes main content full width
// @author       Ozafy
// @match        https://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function () {
  //'use strict';
  var x = document.getElementsByClassName("mw-page-container");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.maxWidth = "none";
  }
  var x = document.getElementsByClassName("mw-body");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.gridTemplate = "min-content min-content min-content 1fr / 1fr min-content";
    x[i].style.gridTemplateAreas = "'titlebar-cx .        ' 'titlebar    columnEnd' 'toolbar     columnEnd' 'content     columnEnd'";
  }
})();
