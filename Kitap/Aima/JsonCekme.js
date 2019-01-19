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


