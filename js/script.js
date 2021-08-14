var ar1 = '';
var en1 = '';
var file= '';
console.log("Script.js Loaded");

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function toTop() {
  window.scrollTo(0, 0);
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
window.addEventListener("load", myInit, true); function myInit() {
  includeHTML();
  w3IncludeHTML();
  
readTextFile("/text/Arabic-Lorem.txt");
readTextFile("/text/English-Lorem.txt");
};
function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (file == '/text/Arabic-Lorem.txt') {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          ar1 = rawFile.responseText;
        }else{
          console.log('error');
        }
      }
    } else if (file == '/text/English-Lorem.txt')
      
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        en1 = rawFile.responseText;
      }else{
        console.log('error');
      }
    }else{
      console.error("WARNING: Error reading file")
    }
  } 
  rawFile.send(null);
}


readTextFile("/text/Arabic-Lorem.txt");
readTextFile("/text/English-Lorem.txt");
var dictionary = {
  'button-1': {
    'en': 'Switch to Arabic<br>قم بالتبديل إلى اللغة العربية',
    'ar': 'Switch to English<br><span lang="ar">قم بالتبديل إلى اللغة الإنجليزية</span>',
  },
  'lorem': {
    'en': en1,
    'ar': ar1,
  }
};
var langs = ['en', 'ar'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function () {
  current_lang_index = ++current_lang_index % 2;
  current_lang = langs[current_lang_index];
  translate();
}

function translate() {
  $("[data-translate]").each(function () {
    var key = $(this).data('translate');
    $(this).html(dictionary[key][current_lang] || "N/A");
  });
}

translate();
