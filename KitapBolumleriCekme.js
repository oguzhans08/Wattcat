$(document).ready(function(){
  function notlariListele(param) {
      var httpistegi = new XMLHttpRequest();
      var adres = "https://raw.githubusercontent.com/salimcansatici/Wattcat/master/KitapBolumleri.json";
    
    
      httpistegi.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          var css_listele = document.querySelector(".kitapveri");
         
            css_listele.innerHTML += '<div class="kitapveri">' + myArr[0].Aima1 + '</div><div class="tarih"> 28.12.2018 </div>';
         
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
     
        css_listele.innerHTML += '<div class="listele">' + myArr[1].Aima2 + '</div><div class="tarih"> 28.12.2018 </div>';
     
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
     
        aima3.innerHTML += '<div class="Aima3">' + myArr[2].Aima3 + '</div><div class="tarih"> 28.12.2018 </div>';
     
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
     
        aima4.innerHTML += '<div class="Aima4">' + myArr[3].Aima4 + '</div><div class="tarih"> 28.12.2018 </div>';
     
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
     
        aima5.innerHTML += '<div class="Aima5">' + myArr[4].Aima5 + '</div><div class="tarih"> 28.12.2018 </div>';
        
     
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
     
        css_listele6.innerHTML += '<div class="BirSemteVurduGece1">' + myArr[5].BirSemteVurduGece1 + '</div><div class="tarih"> 28.12.2018 </div>';
     
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
     
        css_listele7.innerHTML += '<div class="BirSemteVurduGece2">' + myArr[6].BirSemteVurduGece2 + '</div><div class="tarih"> 28.12.2018 </div>';
     
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
     
        css_listele8.innerHTML += '<div class="BirSemteVurduGece3">' + myArr[7].BirSemteVurduGece3 + '</div><div class="tarih"> 28.12.2018 </div>';
     
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
     
        css_listele9.innerHTML += '<div class="BirSemteVurduGece4">' + myArr[8].BirSemteVurduGece4 + '</div><div class="tarih"> 28.12.2018 </div>';
     
    }
  };
  httpistegi9.open("GET", adres9, true);
  httpistegi9.send();
}

notlariListele9();


