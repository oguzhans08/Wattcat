$(document).ready(function(){
  function notlariListele(param) {
      var httpistegi = new XMLHttpRequest();
      var adres = "https://github.com/salimcansatici/Wattcat/blob/master/json/Kor%20Heves/2.json";
    
    
      httpistegi.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          var kitapveri = document.querySelector(".kitapveri");
          myArr.forEach(function(params) {
            kitapveri.innerHTML += '<div class="birnot"><div class="baslik">' + params.notIcerik + '</div><br></div>';
          });
        }
      };
      httpistegi.open("GET", adres, true);
      httpistegi.send();
    }
  
    notlariListele();
});
