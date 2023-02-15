// ==UserScript==
// @name         Wikipedia full width
// @version      1.0
// @description  Makes the text div full width
// @author       Ozafy
// @match        https://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';
  var x = document.getElementsByClassName("mw-page-container");
  console.log(x);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.maxWidth="none";
  }
  var x = document.getElementsByClassName("mw-content-container");
  console.log(x);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.maxWidth="none";
  }
})();
