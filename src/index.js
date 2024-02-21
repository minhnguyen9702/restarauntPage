import './style.css'
import {clearContent, loadHomepage, loadMenu} from './pageLoader';

window.onload = function() {
    loadHomepage();
}

document.getElementById("homeButton").addEventListener("click", function(){
    loadHomepage();
});

document.getElementById("menuButton").addEventListener("click", function(){
    loadMenu();
});

document.getElementById("contactButton").addEventListener("click", function(){
    loadMenu();
});