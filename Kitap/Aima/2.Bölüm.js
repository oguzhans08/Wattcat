$(document).ready(function(){
  function notlariListele(param) {
      var httpistegi = new XMLHttpRequest();
      var adres = "http://wattcat.com/json/aima/One.json";
    
    
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
