var z = localStorage.getItem('langPref');
var ar1 = 'don\x27t see file';
var en1 = "don\x27t see file";
var file = '';
console.log("Script.js Loaded");

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function toTop() {
  window.scrollTo(0, 0);
  trans()
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
  setTimeout(translate, 3000);
  setTimeout(translate, 5000);
  // readTextFile("https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/Arabic-Lorem.txt");
  // readTextFile("https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/English-Lorem.txt");
};


function trans() {
  setTimeout(trans, 3000);

  if (localStorage.getItem('langPref') == "Arabic") {
    current_lang_index = 1;
    current_lang = langs[current_lang_index];
    document.getElementById("ar").selected = 'true';
    console.debug('ar')
  }
  else if (localStorage.getItem('langPref') == "English") {
    current_lang_index = 0;
    current_lang = langs[current_lang_index];
    document.getElementById("en").selected = 'true';
    console.debug('en')
  }
  else {
    current_lang_index = 0;
    current_lang = langs[current_lang_index];
    document.getElementById("en").selected = 'true';
    console.debug('en')
  }
  translate()
  console.debug('translating');
}
// function readTextFile(file) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function () {
//     if (file == 'https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/Arabic-Lorem.txt') {
//       if (rawFile.readyState === 4) {
//         if (rawFile.status === 200 || rawFile.status == 0) {
//           ar1 = rawFile.responseText;
//         }else{
//           console.log('error');
//         }
//       }
//     } else if (file == 'https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/English-Lorem.txt')

//     if (rawFile.readyState === 4) {
//       if (rawFile.status === 200 || rawFile.status == 0) {
//         en1 = rawFile.responseText;
//       }else{
//         console.log('error');
//       }
//     }
//   } 
//   rawFile.send(null);
// }


// readTextFile("https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/Arabic-Lorem.txt");
// readTextFile("https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/English-Lorem.txt");

// read text from URL location
// getText(en1)

// function getText(en1){
//   var request = new XMLHttpRequest();
//   request.open('GET', 'https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/English-Lorem.txt', true);
//   request.send(null);
//   request.onreadystatechange = function () {
//       if (request.readyState === 4 && request.status === 200) {
//           var type = request.getResponseHeader('Content-Type');
//           if (type.indexOf("text") !== 1) {
//             en1 = request.responseText;
//             window.en1 = request.responseText;
//             console.log(en1);
//             return en1;

//           }
//       }else{
//         return false;
//       }
//       alert(en1);
//   }
// };
fetch('https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/English-Lorem.txt')
  .then(response => response.text())
  .then((data) => {
    en1 = data;
    fetch('https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/Arabic-Lorem.txt')
      .then(response => response.text())
      .then((data) => {
        ar1 = data;
        fetch('https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/peopleTxt.txt')
          .then(response => response.text())
          .then((data) => {
            en2 = data;
            fetch('https://raw.githubusercontent.com/Techpro709/Iqra-tamkeen-host/main/text/peopleTxt-ar.txt')
              .then(response => response.text())
              .then((data) => {
                ar2 = data;
                fetchDun()
              })
          })
      })
  })

var dictionary = {
  'button-1': {
    'en': 'Switch to Arabic<br>قم بالتبديل إلى اللغة العربية',
    'ar': 'Switch to English<br><span lang="ar">قم بالتبديل إلى اللغة الإنجليزية</span>',
  }
};

function fetchDun() {
  dictionary = {
    'button-1': {
      'en': 'Switch to Arabic<br>قم بالتبديل إلى اللغة العربية',
      'ar': 'Switch to English<br><span lang="ar">قم بالتبديل إلى اللغة الإنجليزية</span>',
    },
    'lorem': {
      'en': en1,
      'ar': ar1,
    }, 'peopleTxt': {
      'en': en2,
      'ar': ar2,
    }, 'people': {
      'en': 'People',
      'ar': 'اشخاص',
    }, 'projects': {
      'en': 'Research Projects',
      'ar': 'المشاريع البحثية',
    }, 'projectsTxt': {
      'en': 'Students and faculty collaborate on relevant research projects, unlike this text which is meaningless.',
      'ar': 'يتعاون الطلاب وأعضاء هيئة التدريس في مشاريع بحثية ذات صلة ، على عكس هذا النص الذي لا معنى له.',
    }, 'communityTxt': {
      'en': 'Seminars bring experts from far and near for succinct discussion-centric presentations.',
      'ar': 'تجلب الندوات خبراء من بعيد ومن قريب لتقديم عروض تقديمية موجزة تتمحور حول المناقشة.',
    }, 'community': {
      'en': 'Community',
      'ar': 'تواصل اجتماعي',
    }
    , 'partners': {
      'en': 'Partners',
      'ar': 'شركاء',
    }, 'partnersTxt': {
      'en': 'Industry partners are our strong supporters and research collaborators.',
      'ar': 'شركاء الصناعة هم داعمونا الأقوياء والمتعاونون في البحث.',
    }, 'iqraHeader': {
      'en': 'IQRA Islamic & Quranic Research Association is composed of',
      'ar': 'تتكون جمعية البحوث الإسلامية والقرآنية من',
    },
    'featured': {
      'en': 'FEATURED PROJECT - <b>Making This Website</b>',
      'ar': 'مشروع مميز - <b> إنشاء موقع الويب هذا </ b>',
    },
    'nav-mission': {
      'en': 'Mission',
      'ar': 'بعثة',
    }, 'nav-projects': {
      'en': 'Projects',
      'ar': 'المشاريع',
    }, 'nav-pub': {
      'en': 'Publications',
      'ar': 'المنشورات',
    }, 'nav-seminars': {
      'en': 'Seminars',
      'ar': 'ندوات',
    }, 'nav-top-stories': {
      'en': 'Top Stories',
      'ar': 'أهم الأخبار',
    }, 'nav-logo': {
      'en': '<b>IQRA</b>',
      'ar': '<b>اقرأ</b>',
    }
  };
  translate();
}
function lang() {

}
var langs = ['en', 'ar'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function () {
  x = document.getElementById("en").selected;
  y = document.getElementById("ar").selected;
  console.debug('activated' + ' x = ' + x + ' y = ' + y);
  if (x == true && y == false) {
    current_lang_index = 0;
    current_lang = langs[current_lang_index];
    localStorage.setItem('langPref', 'English');
    console.debug('setting lang to en, result ' + localStorage.getItem('langPref'));
  } else if (x == false && y == true) {
    current_lang_index = 1;
    current_lang = langs[current_lang_index];
    localStorage.setItem('langPref', 'Arabic');
    console.debug('setting lang to ar, result ' + localStorage.getItem('langPref'));
  } else {
    console.debug('ERROR');
  }

  // current_lang_index = ++current_lang_index % 2;
  // current_lang = langs[current_lang_index];
  translate();
}

function translate() {
  $("[data-translate]").each(function () {
    var key = $(this).data('translate');
    $(this).html(dictionary[key][current_lang] || "N/A");
  });
}
