// ==UserScript==
// @name         Wikipedia full width
// @version      1.0
// @description  Makes main content full width
// @author       Ozafy
// @match        https://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';
  var x = document.getElementsByClassName("mw-page-container");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.maxWidth="none";
  }
  var x = document.getElementsByClassName("mw-content-container");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.maxWidth="none";
  }
})();
