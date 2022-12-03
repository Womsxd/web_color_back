// ==UserScript==
// @name         恢复彩色
// @namespace    https://github.com/Womsxd/web_color_back
// @version      0.1
// @description  快速去除除灰色遮罩
// @author       womsxd
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("html").style.filter='grayscale(0%)'
    document.querySelector("body").style.filter='grayscale(0%)'
    // Your code here...
})();
