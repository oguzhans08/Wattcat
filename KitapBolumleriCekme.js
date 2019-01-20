



$(document).ready(function(){
  function notlariListele(param) {
      var httpistegi = new XMLHttpRequest();
      var adres = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";
    
    
      httpistegi.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          var css_listele = document.querySelector(".kitapveri");
         
            css_listele.innerHTML += '<div class="kitapveri">' + myArr[0].Aima1 + '</div> ';
         
        }
      };
      httpistegi.open("GET", adres, true);
      httpistegi.send();
    }
  
    notlariListele();
});

function notlariListele2(param) {
  var httpistegi2 = new XMLHttpRequest();
  var adres2 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele = document.querySelector(".listele");
     
        css_listele.innerHTML += '<div class="listele">' + myArr[1].Aima2 + '</div> ';
     
    }
  };
  httpistegi2.open("GET", adres2, true);
  httpistegi2.send();
}

notlariListele2();


function notlariListele3(param) {
  var httpistegi3 = new XMLHttpRequest();
  var adres3 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var aima3 = document.querySelector(".Aima3");
     
        aima3.innerHTML += '<div class="Aima3">' + myArr[2].Aima3 + '</div> ';
     
    }
  };
  httpistegi3.open("GET", adres3, true);
  httpistegi3.send();
}

notlariListele3();


function notlariListele4(param) {
  var httpistegi4 = new XMLHttpRequest();
  var adres4 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";
  httpistegi4.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var aima4 = document.querySelector(".Aima4");
     
        aima4.innerHTML += '<div class="Aima4">' + myArr[3].Aima4 + '</div> ';
     
    }
  };
  httpistegi4.open("GET", adres4, true);
  httpistegi4.send();
}

notlariListele4();







function notlariListele5(param) {
  var httpistegi5 = new XMLHttpRequest();
  var adres5 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi5.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var aima5 = document.querySelector(".Aima5");
     
        aima5.innerHTML += '<div class="Aima5">' + myArr[4].Aima5 + '</div> ';
        
     
    }
  };
  httpistegi5.open("GET", adres5, true);
  httpistegi5.send();
}

notlariListele5();




function notlariListele6(param) {
  var httpistegi6 = new XMLHttpRequest();
  var adres6 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi6.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele6 = document.querySelector(".BirSemteVurduGece1");
     
        css_listele6.innerHTML += '<div class="BirSemteVurduGece1">' + myArr[5].BirSemteVurduGece1 + '</div> ';
     
    }
  };
  httpistegi6.open("GET", adres6, true);
  httpistegi6.send();
}

notlariListele6();



function notlariListele7(param) {
  var httpistegi7 = new XMLHttpRequest();
  var adres7 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi7.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele7 = document.querySelector(".BirSemteVurduGece2");
     
        css_listele7.innerHTML += '<div class="BirSemteVurduGece2">' + myArr[6].BirSemteVurduGece2 + '</div> ';
     
    }
  };
  httpistegi7.open("GET", adres7, true);
  httpistegi7.send();
}

notlariListele7();

function notlariListele8(param) {
  var httpistegi8 = new XMLHttpRequest();
  var adres8 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi8.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele8 = document.querySelector(".BirSemteVurduGece3");
     
        css_listele8.innerHTML += '<div class="BirSemteVurduGece3">' + myArr[7].BirSemteVurduGece3 + '</div> ';
     
    }
  };
  httpistegi8.open("GET", adres8, true);
  httpistegi8.send();
}

notlariListele8();


function notlariListele9(param) {
  var httpistegi9 = new XMLHttpRequest();
  var adres9 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi9.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele9 = document.querySelector(".BirSemteVurduGece4");
     
        css_listele9.innerHTML += '<div class="BirSemteVurduGece4">' + myArr[8].BirSemteVurduGece4 + '</div> ';
     
    }
  };
  httpistegi9.open("GET", adres9, true);
  httpistegi9.send();
}

notlariListele9();





function notlariListele10(param) {
  var httpistegi10 = new XMLHttpRequest();
  var adres10 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi10.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele10 = document.querySelector(".KorHeves1");
     
        css_listele10.innerHTML += '<div class="KorHeves1">' + myArr[9].KorHeves1 + '</div>';
     
    }
  };
  httpistegi10.open("GET", adres10, true);
  httpistegi10.send();
}

notlariListele10();


function notlariListele11(param) {
  var httpistegi11 = new XMLHttpRequest();
  var adres11 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi11.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele11 = document.querySelector(".KorHeves2");
     
        css_listele11.innerHTML += '<div class="KorHeves2">' + myArr[10].KorHeves2 + '</div>';
     
    }
  };
  httpistegi11.open("GET", adres11, true);
  httpistegi11.send();
}

notlariListele11();










function notlariListele12(param) {
  var httpistegi12 = new XMLHttpRequest();
  var adres12 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi12.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele12 = document.querySelector(".MorSalkim1");
     
        css_listele12.innerHTML += '<div class="MorSalkim1">' + myArr[11].MorSalkim1 + '</div>';
     
    }
  };
  httpistegi12.open("GET", adres12, true);
  httpistegi12.send();
}

notlariListele12();


function notlariListele13(param) {
  var httpistegi13 = new XMLHttpRequest();
  var adres13 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi13.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele13 = document.querySelector(".MorSalkim2");
     
        css_listele13.innerHTML += '<div class="MorSalkim2">' + myArr[12].MorSalkim2 + '</div>';
     
    }
  };
  httpistegi13.open("GET", adres13, true);
  httpistegi13.send();
}

notlariListele13();



function notlariListele14(param) {
  var httpistegi14 = new XMLHttpRequest();
  var adres14 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi14.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele14 = document.querySelector(".MorSalkim3");
     
        css_listele14.innerHTML += '<div class="MorSalkim3">' + myArr[13].MorSalkim3 + '</div>';
     
    }
  };
  httpistegi14.open("GET", adres14, true);
  httpistegi14.send();
}

notlariListele14();





function notlariListele15(param) {
  var httpistegi15 = new XMLHttpRequest();
  var adres15 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi15.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele15 = document.querySelector(".MorSalkim4");
     
        css_listele15.innerHTML += '<div class="MorSalkim4">' + myArr[14].MorSalkim4 + '</div>';
     
    }
  };
  httpistegi15.open("GET", adres15, true);
  httpistegi15.send();
}

notlariListele15();

function notlariListele16(param) {
  var httpistegi16 = new XMLHttpRequest();
  var adres16 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi16.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele16 = document.querySelector(".MorSalkim5");
     
        css_listele16.innerHTML += '<div class="MorSalkim5">' + myArr[15].MorSalkim5 + '</div>';
     
    }
  };
  httpistegi16.open("GET", adres16, true);
  httpistegi16.send();
}

notlariListele16();


function notlariListele12(param) {
  var httpistegi12 = new XMLHttpRequest();
  var adres12 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi12.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele12 = document.querySelector(".Nazenin1");
     
        css_listele12.innerHTML += '<div class="Nazenin1">' + myArr[16].Nazenin1 + '</div>';
     
    }
  };
  httpistegi12.open("GET", adres12, true);
  httpistegi12.send();
}

notlariListele12();


function notlariListele13(param) {
  var httpistegi13 = new XMLHttpRequest();
  var adres13 = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";


  httpistegi13.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var css_listele13 = document.querySelector(".Nazenin2");
     
        css_listele13.innerHTML += '<div class="Nazenin2">' + myArr[17].Nazenin2 + '</div>';
     
    }
  };
  httpistegi13.open("GET", adres13, true);
  httpistegi13.send();
}

notlariListele13();

//$('input.cb-value').prop("checked", true);
$('.cb-value').click(function() {
  var mainParent = $(this).parent('.toggle-btn');
  if($(mainParent).find('input.cb-value').is(':checked')) {
    $(mainParent).addClass('active');
  } else {
    $(mainParent).removeClass('active');
    
  }
 var x = document.getElementById("myDIV");
                if (x.style.display === "none") {
                  x.style.display = "block";
                } else {
                  x.style.display = "none";
              
              }
              var x = document.getElementById("myDIV2");
           
                if (x.style.display === "none") 
                
                {

                  x.style.display = "block";
                } 
                
                else {

                  x.style.display = "none";
              
              } 



              var x = document.getElementById("myDIV3");
                if (x.style.display === "none") {
                  x.style.display = "block";
                } else {
                  x.style.display = "none";
              
              }
              var x = document.getElementById("myDIV4");
              if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
            
            }
            var x = document.getElementById("myDIV5");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
          
          }
})
